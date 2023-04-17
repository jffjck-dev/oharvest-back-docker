-- Verify oharvest:5.crud_product on pg

BEGIN;

SELECT * FROM product_insert();

SELECT * FROM product_update();

ROLLBACK;
