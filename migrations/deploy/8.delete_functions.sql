-- Deploy oharvest:8.delete_functions to pg

BEGIN;

ALTER TABLE product
    DROP CONSTRAINT "product_category_id_fkey",
    ADD CONSTRAINT "product_category_id_fkey"
    FOREIGN KEY ("category_id")
    REFERENCES "category"("id")
    ON DELETE CASCADE;

ALTER TABLE variety
    DROP CONSTRAINT "variety_product_id_fkey",
    ADD CONSTRAINT "variety_product_id_fkey"
    FOREIGN KEY ("product_id")
    REFERENCES "product"("id")
    ON DELETE CASCADE;

ALTER TABLE product_in_plot
    DROP CONSTRAINT "product_in_plot_plot_id_fkey",
    ADD CONSTRAINT "product_in_plot_plot_id_fkey"
    FOREIGN KEY ("plot_id")
    REFERENCES "plot"("id")
    ON DELETE CASCADE;

ALTER TABLE product_in_plot
    DROP CONSTRAINT "product_in_plot_product_id_fkey",
    ADD CONSTRAINT "product_in_plot_product_id_fkey"
    FOREIGN KEY ("product_id")
    REFERENCES "product"("id")
    ON DELETE CASCADE;

CREATE OR REPLACE FUNCTION category_delete(pp json) RETURNS category AS $$
    DELETE  
    FROM category c
    WHERE c.id=(pp->>'categoryId')::int
    RETURNING *;
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION plot_delete(pp json) RETURNS plot AS $$
    DELETE  
    FROM plot pl
    WHERE pl.id=(pp->>'plotId')::int 
    RETURNING *;
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION product_delete(pp json) RETURNS product AS $$
    DELETE  
    FROM product pr
    WHERE pr.id=(pp->>'productId')::int
    RETURNING *;
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION variety_delete(pp json) RETURNS variety AS $$
    DELETE  
    FROM variety v
    WHERE v.id=(pp->>'varietyId')::int
    RETURNING *;
$$ LANGUAGE SQL;

COMMIT;
