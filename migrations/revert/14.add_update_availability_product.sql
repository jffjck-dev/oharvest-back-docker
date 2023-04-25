-- Revert oharvest:14.add_update_availability_product from pg

BEGIN;

DROP FUNCTION product_update(int, boolean);
DROP FUNCTION product_in_plot_delete(int);

COMMIT;
