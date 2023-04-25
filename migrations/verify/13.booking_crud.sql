-- Verify oharvest:13.reservation_crud on pg

BEGIN;

SELECT * FROM booking;
SELECT * FROM booking_select;
SELECT * FROM booking_insert;
SELECT * FROM booking_update;

ROLLBACK;
