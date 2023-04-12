-- Revert oharvest:1.create_table from pg

BEGIN;

DROP TABLE "variety", "product", "plot", "category";

COMMIT;
