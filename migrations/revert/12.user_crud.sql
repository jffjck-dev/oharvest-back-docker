-- Revert oharvest:12.user_crud from pg

BEGIN;

DROP FUNCTION employee_delete, employee_update, employee_insert;
DROP VIEW employee_select;
DROP TABLE employee;
DROP DOMAIN name_validator, mail_validator;

COMMIT;
