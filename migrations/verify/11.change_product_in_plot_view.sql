-- Verify oharvest:11.change_product_in_plot_view on pg

BEGIN;

SELECT * FROM plot_select;
SELECT * FROM product_in_plot_select;

ROLLBACK;
