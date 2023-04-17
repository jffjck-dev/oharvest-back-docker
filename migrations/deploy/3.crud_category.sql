-- Deploy oharvest:3.crud_category to pg

BEGIN;

CREATE OR REPLACE FUNCTION category_insert(c json) RETURNS category AS $$
    INSERT INTO category
	(name)
	VALUES (
        c->>'name'
    ) RETURNING *;
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION category_update(c json) RETURNS category AS $$
    UPDATE category
        SET 
        name=c->>'name'
        WHERE id=(c->>'id')::int
        RETURNING *;
$$ LANGUAGE SQL;

COMMIT;