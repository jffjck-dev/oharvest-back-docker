-- Deploy oharvest:10.alter_table_product_variety to pg

BEGIN;

CREATE DOMAIN "date_picker" as INT CHECK(
    VALUE >= 1
    AND VALUE <= 12
);

ALTER TABLE "product"
    ADD COLUMN "date_begin" date_picker,
    ADD COLUMN "date_end" date_picker ;

ALTER TABLE "variety"
    ADD COLUMN "description" text,
    ADD COLUMN "date_begin" date_picker,
    ADD COLUMN "date_end" date_picker ;

UPDATE "product" 
SET
    "date_begin" = EXTRACT(MONTH FROM "harvest_begin_at"),
    "date_end" = EXTRACT(MONTH FROM "harvest_end_at");

UPDATE "variety"
SET
    "date_begin" = EXTRACT(MONTH FROM "harvest_begin_at"),
    "date_end" = EXTRACT(MONTH FROM "harvest_end_at");

DROP VIEW product_select, variety_select;

ALTER TABLE "product"
    DROP COLUMN "harvest_begin_at",
    DROP COLUMN "harvest_end_at";

ALTER TABLE "variety"
    DROP COLUMN "harvest_begin_at",
    DROP COLUMN "harvest_end_at";

ALTER TABLE "product"
    RENAME "feature" TO "description";

ALTER TABLE "product"
    RENAME "trick" TO "tip";

ALTER TABLE "product"
    RENAME "date_begin" TO "harvest_begin_at";

ALTER TABLE "product"
    RENAME "date_end" TO "harvest_end_at";

ALTER TABLE "variety"
    RENAME "date_begin" TO "harvest_begin_at";

ALTER TABLE "variety"
    RENAME "date_end" TO "harvest_end_at";

ALTER TABLE "variety"
    ALTER "harvest_begin_at" SET NOT NULL,
    ALTER "harvest_end_at" SET NOT NULL;

ALTER TABLE "product"
    ALTER "harvest_begin_at" SET NOT NULL,
    ALTER "harvest_end_at" SET NOT NULL;

CREATE VIEW product_select AS
    SELECT
        "p"."id",
        "p"."name",
        "p"."is_available" as "isAvailable",
        "p"."image",
        "p"."description",
        "p"."tip",
        "p"."harvest_begin_at" as "harvestBeginAt",
        "p"."harvest_end_at" as "harvestEndAt",
        (json_build_object(
                'id', c.id,
                'name', c.name
            )) AS "category",
        COALESCE(
            (SELECT array_agg(
                    json_build_object(
                            'id', v.id,
                            'name', v.name,
                            'description', v.description,
                            'harvestBeginAt', v.harvest_begin_at,
                            'harvestEndAt', v.harvest_end_at
                        )
                )
            FROM variety v
            WHERE v.product_id = p.id),
            '{}'
            ) as "variety"
    FROM "product" p
    JOIN category c ON c.id = p.category_id;

CREATE VIEW variety_select AS
    SELECT
        "v"."id",
        "v"."name",
        "v"."description",
        "v"."harvest_begin_at" as "harvestBeginAt",
        "v"."harvest_end_at" as "harvestEndAt",
        (json_build_object(
            'id', p.id,
            'name', p.name,
            'isAvailable', p.is_available,
            'image', p.image,
            'description', p.description,
            'tip', p.tip,
            'harvestBeginAt', p.harvest_begin_at,
            'harvestEndAt', p.harvest_end_at
        )) as "product"
    FROM "variety" v
    JOIN product p ON p.id = v.product_id;

CREATE OR REPLACE FUNCTION product_insert(p json) RETURNS product AS $$
    INSERT INTO product
	(name, is_available, image, description, tip, harvest_begin_at, harvest_end_at, category_id)
	VALUES (
        p->>'name',
        (p->>'isAvailable')::boolean,
        p->>'image',
        p->>'description',
        p->>'tip',
        (p->>'harvestBeginAt')::int,
        (p->>'harvestEndAt')::int,
        (p->>'categoryId')::int
    ) RETURNING *;
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION product_update(p json) RETURNS product AS $$
    UPDATE product
        SET 
        name=p->>'name',
        is_available=(p->>'isAvailable')::boolean,
        image=p->>'image',
        description=p->>'description',
        tip=p->>'tip',
        harvest_begin_at=(p->>'harvestBeginAt')::int,
        harvest_end_at=(p->>'harvestEndAt')::int,
        category_id=(p->>'categoryId')::int
        WHERE id=(p->>'id')::int
        RETURNING *;
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION variety_insert(v json) RETURNS variety AS $$
    INSERT INTO variety
	(name, description, harvest_begin_at, harvest_end_at, product_id)
	VALUES (
        v->>'name',
        v->>'description',
        (v->>'harvestBeginAt')::int,
        (v->>'harvestEndAt')::int,
        (v->>'productId')::int
    ) RETURNING *;
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION variety_update(v json) RETURNS variety AS $$
    UPDATE variety
        SET 
        "name"=v->>'name',
        "description"=v->>'description',
        "harvest_begin_at"=(v->>'harvestBeginAt')::int,
        "harvest_end_at"=(v->>'harvestEndAt')::int,
        "product_id"=(v->>'productId')::int
        WHERE "id"=(v->>'id')::int
        RETURNING *;
$$ LANGUAGE SQL;

COMMIT; 
