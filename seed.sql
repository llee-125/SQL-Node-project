DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;
USE todo_db;

CREATE TABLE todos (
id INT NOT NULL AUTO_INCREMENT,
text VARCHAR(80) NOT NULL,
completed BOOLEAN DEFAULT FALSE,
priority VARCHAR(2) DEFAULT TRUE NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO todos(text)
VALUES ("Learn My SQL");

INSERT INTO todos(text)
VALUES ("feed dogs");

INSERT INTO todos(text, priority)
VALUES ("Take a shower--you smell", 10);

INSERT INTO todos(text, completed)
VALUES ("Go to Class, no more skipping", TRUE);

SELECT * FROM todos;

UPDATE todos
SET text = "Live Life"
WHERE id = 2;

UPDATE todos
SET completed = TRUE
WHERE id = 3;

DELETE FROM todos WHERE id = 2;