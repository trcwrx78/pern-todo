CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

INSERT INTO todo (description) VALUES($1);

SELECT * FROM todo WHERE todo_id = $1;

UPDATE todo SET description = $1 WHERE todo_id = $2;

DELETE FROM todo WHERE todo_id = $1;