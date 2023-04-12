-- Verify oharvest:1.create_table on pg

BEGIN;

SELECT * FROM "variety";
SELECT * FROM "product";
SELECT * FROM "plot";
SELECT * FROM "category";

ROLLBACK;
