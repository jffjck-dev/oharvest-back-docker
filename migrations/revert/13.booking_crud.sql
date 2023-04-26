-- Revert oharvest:13.reservation_crud from pg

BEGIN;

DROP FUNCTION booking_insert, booking_update;
DROP VIEW booking_select;
DROP TABLE booking;
DROP DOMAIN zipcode_validator, phone_validator, visit_at_validator;
DROP TYPE slot, confirm;

COMMIT;
