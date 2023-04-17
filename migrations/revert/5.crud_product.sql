-- Revert oharvest:5.crud_product from pg

BEGIN;

DROP FUNCTION "product_insert", "product_update";

COMMIT;
