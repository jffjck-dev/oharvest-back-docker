-- Revert oharvest:9.update_view_product from pg

BEGIN;

DROP VIEW product_select;

CREATE VIEW product_select AS
SELECT
    "p"."id",
    "p"."name",
    "p"."is_available" as "isAvailable",
    "p"."image",
    "p"."feature",
    "p"."trick",
    "p"."harvest_begin_at" as "harvestBeginAt",
    "p"."harvest_end_at" as "harvestEndAt",
    (json_build_object(
            'id', c.id,
            'name', c.name
        )) AS "category"
FROM "product" p
         JOIN category c ON c.id = p.category_id;

COMMIT;
