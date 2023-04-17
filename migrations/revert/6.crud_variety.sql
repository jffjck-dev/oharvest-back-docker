-- Revert oharvest:6.crud_variety from pg

BEGIN;

DROP FUNCTION "variety_insert", "variety_update";

COMMIT;
