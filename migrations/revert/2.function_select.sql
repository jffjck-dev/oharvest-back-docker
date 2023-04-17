-- Revert oharvest:2.function_select from pg

BEGIN;

DROP VIEW "variety_select", "product_select", "category_select", "plot_select";

COMMIT;
