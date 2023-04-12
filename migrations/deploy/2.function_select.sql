-- Deploy oharvest:2.function_select to pg

BEGIN;

CREATE VIEW category_select AS 
    SELECT
        "id",
        "name"
    FROM "category";

CREATE VIEW plot_select AS
    SELECT 
        "id",
        "name"
    FROM "plot";

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

CREATE VIEW variety_select AS
    SELECT 
        "v"."id",
        "v"."name",
        "v"."harvest_begin_at" as "harvestBeginAt",
        "v"."harvest_end_at" as "harvestEndAt",
        (json_build_object(
            'id', p.id,
            'name', p.name,
            'isAvailable', p.is_available,
            'image', p.image,
            'feature', p.feature,
            'trick', p.trick,
            'harvestBeginAt', p.harvest_begin_at,
            'harvestEndAt', p.harvest_end_at
        )) as "product"
    FROM "variety" v
    JOIN product p ON p.id = v.product_id;

COMMIT;
