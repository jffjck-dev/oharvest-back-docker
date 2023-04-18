-- Deploy oharvest:9.update_view_product to pg

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
            )) AS "category",
        COALESCE(
            (SELECT array_agg(
                    json_build_object(
                            'id', v.id,
                            'name', v.name,
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

COMMIT;
