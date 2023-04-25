-- Deploy oharvest:7.product_in_plot to pg

BEGIN;

CREATE TABLE product_in_plot (
    "product_id" INT REFERENCES "product"("id"),
    "plot_id" INT REFERENCES "plot"("id")
);

CREATE VIEW product_in_plot_select AS
    SELECT
        ARRAY_AGG (json_build_object(
            'id', pr.id,
            'name', pr.name,
            'isAvailable', pr.is_available,
            'image', pr.image
        )) AS "product",
        pl.id AS "plotId"
    FROM "product_in_plot" p
    JOIN "product" pr ON p.product_id = pr.id
    JOIN "plot" pl ON p.plot_id = pl.id
    GROUP BY pl.id;

CREATE OR REPLACE FUNCTION product_in_plot_insert(pp json) RETURNS product_in_plot AS $$
    INSERT INTO product_in_plot
	(product_id, plot_id)
	VALUES (
        (pp->>'productId')::int,
        (pp->>'plotId')::int
    ) RETURNING *;
$$ LANGUAGE SQL SECURITY DEFINER;

CREATE OR REPLACE FUNCTION product_in_plot_delete(pp json) RETURNS product_in_plot AS $$
    DELETE  
    FROM product_in_plot p
    WHERE p.product_id=(pp->>'productId')::int AND p.plot_id=(pp->>'plotId')::int
    RETURNING *;
$$ LANGUAGE SQL SECURITY DEFINER;

COMMIT;
