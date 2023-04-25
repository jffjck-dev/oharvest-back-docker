-- Verify oharvest:9.update_view_product on pg

BEGIN;

SELECT * FROM product_select;

ROLLBACK;
