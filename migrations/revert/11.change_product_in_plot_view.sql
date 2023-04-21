-- Revert oharvest:11.change_product_in_plot_view from pg

BEGIN;

DROP VIEW product_in_plot_select;

CREATE OR REPLACE VIEW product_in_plot_select AS
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

COMMIT;
