-- Revert oharvest:2.function_select from pg

BEGIN;

DROP FUNCTION "variety_select", "product_select", "category_select", "plot_select";
DROP TYPE "product_packed", "variety_packed";

COMMIT;
