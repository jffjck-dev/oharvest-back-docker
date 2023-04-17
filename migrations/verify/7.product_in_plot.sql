-- Verify oharvest:7.product_in_plot on pg

BEGIN;

SELECT * FROM "product_in_plot";

SELECT * FROM product_in_plot_select();

SELECT * FROM product_in_plot_insert();

SELECT * FROM product_in_plot_delete();

ROLLBACK;
