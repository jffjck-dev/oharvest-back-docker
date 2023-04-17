-- Deploy oharvest:6.crud_variety to pg

BEGIN;

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
