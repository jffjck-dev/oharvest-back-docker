-- Verify oharvest:4.crud_plot on pg

BEGIN;

SELECT * FROM plot_insert();

SELECT * FROM plot_update();

ROLLBACK;
