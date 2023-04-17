-- Revert oharvest:8.delete_functions from pg

BEGIN;

DROP FUNCTION "category_delete", "plot_delete", "product_delete", "variety_delete";

COMMIT;
