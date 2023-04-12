-- Deploy oharvest:1.create_table to pg

BEGIN;

CREATE TABLE category (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL
);

CREATE TABLE plot (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL
);

CREATE TABLE product (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "is_available" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT,
    "feature" TEXT,
    "trick" TEXT,
    "harvest_begin_at" DATE NOT NULL,
    "harvest_end_at" DATE NOT NULL,
    "category_id" INT REFERENCES "category"("id")
);

CREATE TABLE "variety" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "harvest_begin_at" DATE NOT NULL,
    "harvest_end_at" DATE NOT NULL,
    "product_id" INT REFERENCES "product"("id")
);

COMMIT;
