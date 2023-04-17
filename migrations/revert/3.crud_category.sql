-- Revert oharvest:3.crud_category from pg

BEGIN;

DROP FUNCTION "category_insert", "category_update";

COMMIT;
