-- Verify oharvest:2.function_select on pg

BEGIN;

SELECT * FROM plot_select();

SELECT * FROM category_select();

SELECT * FROM product_select();

SELECT * FROM variety_select();

ROLLBACK;
