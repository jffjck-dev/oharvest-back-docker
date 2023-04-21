-- Revert oharvest:10.alter_table_product_variety from pg

BEGIN;

ALTER TABLE "product"
    DROP COLUMN "date_begin",
    DROP COLUMN "date_end";

DROP DOMAIN "date_picker" CASCADE ;

CREATE OR REPLACE FUNCTION product_insert(p json) RETURNS product AS $$
    INSERT INTO product
	(name, is_available, image, feature, trick, harvest_begin_at, harvest_end_at, category_id)
	VALUES (
        p->>'name',
        (p->>'isAvailable')::boolean,
        p->>'image',
        p->>'feature',
        p->>'trick',
        (p->>'harvestBeginAt')::date,
        (p->>'harvestEndAt')::date,
        (p->>'categoryId')::int
    ) RETURNING *;
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION product_update(p json) RETURNS product AS $$
    UPDATE product
        SET 
        name=p->>'name',
        is_available=(p->>'isAvailable')::boolean,
        image=p->>'image',
        feature=p->>'feature',
        trick=p->>'trick',
        harvest_begin_at=(p->>'harvestBeginAt')::date,
        harvest_end_at=(p->>'harvestEndAt')::date,
        category_id=(p->>'categoryId')::int
        WHERE id=(p->>'id')::int
        RETURNING *;
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION variety_insert(v json) RETURNS variety AS $$
    INSERT INTO variety
	(name, harvest_begin_at, harvest_end_at, product_id)
	VALUES (
        v->>'name',
        (v->>'harvestBeginAt')::date,
        (v->>'harvestEndAt')::date,
        (v->>'productId')::int
    ) RETURNING *;
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION variety_update(v json) RETURNS variety AS $$
    UPDATE variety
        SET 
        name=v->>'name',
        harvest_begin_at=(v->>'harvestBeginAt')::date,
        harvest_end_at=(v->>'harvestEndAt')::date,
        product_id=(v->>'productId')::int
        WHERE id=(v->>'id')::int
        RETURNING *;
$$ LANGUAGE SQL;

COMMIT;
