-- Revert oharvest:7.product_in_plot from pg

BEGIN;

DROP FUNCTION "product_in_plot_insert", "product_in_plot_delete";

DROP VIEW "product_in_plot_select";

DROP TABLE "product_in_plot";

COMMIT;
