-- Verify oharvest:8.delete_functions on pg

BEGIN;

SELECT * FROM category_delete();

SELECT * FROM plot_delete();

SELECT * FROM product_delete();

SELECT * FROM variety_delete();

ROLLBACK;
