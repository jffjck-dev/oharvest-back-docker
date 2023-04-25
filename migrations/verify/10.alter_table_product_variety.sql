-- Verify oharvest:10.alter_table_product_variety on pg

BEGIN;

SELECT * FROM product_select;
SELECT * FROM variety_select;
SELECT * FROM product_insert;
SELECT * FROM product_update;
SELECT * FROM variety_insert;
SELECT * FROM variety_update;

ROLLBACK;
