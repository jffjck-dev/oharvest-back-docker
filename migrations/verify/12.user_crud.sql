-- Verify oharvest:12.user_crud on pg

BEGIN;

SELECT * FROM employee;
SELECT * FROM employee_select;
SELECT * FROM employee_insert;
SELECT * FROM employee_update;
SELECT * FROM employee_delete;

ROLLBACK;
