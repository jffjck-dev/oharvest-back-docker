-- Deploy oharvest:13.reservation_crud to pg

BEGIN;

CREATE DOMAIN visit_at_validator AS DATE CHECK (
    VALUE > NOW()
);

CREATE TYPE slot AS ENUM ('morning', 'afternoon');

CREATE DOMAIN phone_validator AS TEXT CHECK (
    VALUE ~ '^(?:(?:\+|00)33[\s.]{0,3}(?:\(0\)[\s.]{0,3})?|0)[1-9](?:(?:[\s.]?\d{2}){4}|\d{2}(?:[\s.]?\d{3}){2})$'
);

CREATE DOMAIN zipcode_validator AS TEXT CHECK (
    VALUE ~ '^0[1-9][0-9]{3}$'
    OR VALUE ~ '^[1-8][0-9]{4}$'
    OR VALUE ~ '^9[0-6][0-9]{3}$'
    OR VALUE ~ '^97[1-8][0-9]{2}$'
    OR VALUE ~ '^98[46-9][0-9]{2}$'
);

CREATE TABLE booking (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "booking_at" DATE NOT NULL DEFAULT NOW()::date,
    "visit_at" visit_at_validator NOT NULL,
    "slot" slot NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "phone" phone_validator NOT NULL,
    "mail" mail_validator NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zipcode" zipcode_validator NOT NULL,
    "student_number" INT NOT NULL,
    "group_number" INT NOT NULL, 
    "guide_number" INT NOT NULL, 
    "transport" TEXT NOT NULL,
    "is_confirm" BOOLEAN DEFAULT NULL,
    CHECK ("student_number" > 0 AND "student_number" < 51),
    CHECK ("group_number" > 0 AND "group_number" < 4),
    CHECK ("guide_number" >= "group_number")
);

CREATE VIEW booking_select AS
    SELECT
        "b"."id",
        to_char("b"."booking_at",'YYYY-MM-DD') as "bookingAt",
        to_char("b"."visit_at",'YYYY-MM-DD') as "visitAt",
        "b"."slot",
        "b"."name",
        "b"."contact",
        "b"."phone",
        "b"."mail",
        "b"."address",
        "b"."city",
        "b"."zipcode",
        "b"."student_number" as "studentNumber",
        "b"."group_number" as "groupNumber", 
        "b"."guide_number" as "guideNumber", 
        "b"."transport",
        "b"."is_confirm" as "isConfirm"
    FROM "booking" b;

CREATE OR REPLACE FUNCTION booking_insert(d json) RETURNS booking AS $$
    INSERT INTO booking
	(visit_at, slot, name,contact, phone, mail, address, city, zipcode, student_number, group_number, guide_number, transport)
	VALUES (
        (d->>'visitAt')::date,
        (d->>'slot')::slot,
        d->>'name',
        d->>'contact',
        d->>'phone',
        d->>'mail',
        d->>'address',
        d->>'city',
        d->>'zipcode',
        (d->>'studentNumber')::int,
        (d->>'groupNumber')::int, 
        (d->>'guideNumber')::int, 
        d->>'transport'
    ) RETURNING *;
$$ LANGUAGE SQL SECURITY DEFINER;

CREATE OR REPLACE FUNCTION booking_update(d json) RETURNS booking AS $$
    UPDATE booking
        SET 
        booking_at=(d->>'bookingAt')::date,
        visit_at=(d->>'visitAt')::date,
        slot=(d->>'slot')::slot,
        name=d->>'name',
        contact=d->>'contact',
        phone=d->>'phone',
        mail=d->>'mail',
        address=d->>'address',
        city=d->>'city',
        zipcode=d->>'zipcode',
        student_number=(d->>'studentNumber')::int,
        group_number=(d->>'groupNumber')::int, 
        guide_number=(d->>'guideNumber')::int, 
        transport=d->>'transport',
        is_confirm=(d->>'isConfirm')::boolean
        WHERE id=(d->>'id')::int
        RETURNING *;
$$ LANGUAGE SQL SECURITY DEFINER;

COMMIT;
