-- Deploy oharvest:11.change_product_in_plot_view to pg

BEGIN;

ALTER TABLE plot
    ADD COLUMN "start_point_longitude" NUMERIC (8,6),
    ADD COLUMN "start_point_latitude" NUMERIC (9,6),
    ADD COLUMN "end_point_longitude" NUMERIC (8,6),
    ADD COLUMN "end_point_latitude" NUMERIC (9,6);

DROP VIEW product_in_plot_select, plot_select;

CREATE VIEW plot_select AS
    SELECT 
        "id",
        "name",
        ARRAY[
            [start_point_longitude, start_point_latitude],
            [end_point_longitude, end_point_latitude]
        ] as "coordinate"
    FROM "plot";

CREATE OR REPLACE VIEW product_in_plot_select AS
SELECT
    pl.id,
    pl.name,
    ARRAY[
        [pl.start_point_longitude, pl.start_point_latitude],
        [pl.end_point_longitude, pl.end_point_latitude]
    ] as "coordinate",
    COALESCE(
        (
        SELECT
            ARRAY_AGG (json_build_object(
                    'id', pr.id,
                    'name', pr.name,
                    'isAvailable', pr.is_available,
                    'image', pr.image
                ))
        FROM "product_in_plot" pp
        JOIN product pr ON  pr.id = pp.product_id
        WHERE pl.id= pp.plot_id
        ),
        '{}'
    ) as products
FROM "product_in_plot" pp
RIGHT JOIN plot pl ON pl.id = pp.plot_id
GROUP BY 1, 2, pl.start_point_longitude, pl.end_point_longitude, pl.start_point_latitude, pl.end_point_latitude;

COMMIT;

