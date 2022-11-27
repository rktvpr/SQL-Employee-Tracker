INSERT INTO departments (id, name)
VALUES (1, "Board"),
       (2, "Sales"),
       (3, "Engineering"),
       (4, "Finance"),
       (5, "Legal");

INSERT INTO roles (department_id, title, salary)
VALUES (1, "CEO", 1000000),
       (2, "Sales Lead", 100000),
       (2, "Salesperson", 50000),
       (3, "Lead Engineer", 100000),
       (3, "Software Engineer", 50000),
       (4, "Lead Accountant", 100000),
       (4, "Accountant", 50000),
       (5, "Legal Team Lead", 100000),
       (5, "Lawyer", 50000),

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Rick", "Welte", 1, NULL),
("Tanjiro", "Kamado", 2, 1),
("Naruto", "Uzumaki", 3, 3),
("Sasuke", "Uchiha", 4, 1),
("Hinata", "Hyuga", 5, 1),
("Eren", "Yeager", 6, 4),
("Mikasa", "Ackerman", 7, 1),
("Levi", "Ackerman", 8, 5),
("Madara", "Uchiha", 9, 6),