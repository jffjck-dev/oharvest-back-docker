-- Deploy oharvest:4.crud_plot to pg

BEGIN;

CREATE OR REPLACE FUNCTION plot_insert(p json) RETURNS plot AS $$
    INSERT INTO plot
	(name)
	VALUES (
        p->>'name'
    ) RETURNING *;
$$ LANGUAGE SQL SECURITY DEFINER;

CREATE OR REPLACE FUNCTION plot_update(p json) RETURNS plot AS $$
    UPDATE plot
        SET 
        name=p->>'name'
        WHERE id=(p->>'id')::int
        RETURNING *;
$$ LANGUAGE SQL SECURITY DEFINER;

COMMIT;
