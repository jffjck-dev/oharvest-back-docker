-- Deploy oharvest:12.user_crud to pg

BEGIN;

CREATE DOMAIN mail_validator AS TEXT CHECK (
    VALUE ~ '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'
);

CREATE DOMAIN name_validator AS TEXT CHECK (
    VALUE ~ '^[A-Za-zéèêç-]+$'
);

CREATE TABLE employee (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "mail" mail_validator UNIQUE NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" name_validator NOT NULL,
    "lastname" name_validator NOT NULL
);

CREATE VIEW employee_select AS
    SELECT
        "id",
        "mail",
        "password",
        "firstname",
        "lastname"
    FROM "employee";

CREATE OR REPLACE FUNCTION employee_insert(d json) RETURNS employee AS $$
    INSERT INTO employee
    (mail, password, firstname, lastname)
    VALUES (
        d->>'mail',
        d->>'password',
        d->>'firstname',
        d->>'lastname'
    ) RETURNING *;
$$ LANGUAGE SQL SECURITY DEFINER;

CREATE OR REPLACE FUNCTION employee_update(d json) RETURNS employee AS $$
    UPDATE employee
        SET
        mail=d->>'mail',
        password=d->>'password',
        firstname=d->>'firstname',
        lastname=d->>'lastname'
        WHERE id=(d->>'id')::int
        RETURNING *;
$$ LANGUAGE SQL SECURITY DEFINER;

CREATE OR REPLACE FUNCTION employee_delete(d json) RETURNS employee AS $$
    DELETE
    FROM employee e
    WHERE e.id=(d->>'id')::int
    RETURNING *;
$$ LANGUAGE SQL SECURITY DEFINER;

COMMIT;

