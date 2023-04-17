-- Verify oharvest:6.crud_variety on pg

BEGIN;

SELECT * FROM variety_insert();

SELECT * FROM variety_update();

ROLLBACK;
