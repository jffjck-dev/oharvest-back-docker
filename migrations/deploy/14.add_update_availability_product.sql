-- Deploy oharvest:14.add_update_availability_product to pg

BEGIN;

CREATE OR REPLACE FUNCTION product_update(i int, a boolean) RETURNS product AS $$
UPDATE product
SET
    is_available=a
WHERE id=i
RETURNING *;
$$ LANGUAGE SQL SECURITY DEFINER ;

CREATE OR REPLACE FUNCTION product_in_plot_delete(pr int) RETURNS product_in_plot AS $$
    DELETE
    FROM product_in_plot p
    WHERE p.product_id=pr
    RETURNING *;
$$ LANGUAGE SQL SECURITY DEFINER;

COMMIT;
