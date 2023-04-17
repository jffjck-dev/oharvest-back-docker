-- Revert oharvest:4.crud_plot from pg

BEGIN;

DROP FUNCTION "plot_insert", "plot_update";

COMMIT;
