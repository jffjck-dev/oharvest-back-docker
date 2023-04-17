-- Verify oharvest:3.crud_category on pg

BEGIN;

SELECT * FROM category_insert();

SELECT * FROM category_update();

ROLLBACK;
