-- Deploy oharvest:5.crud_product to pg

BEGIN;

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

COMMIT;
