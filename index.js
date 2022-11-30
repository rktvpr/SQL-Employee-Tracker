const inquirer = require('inquirer');
const mysql = require('mysql2');
const connection = require('./db/connection.js');




const mainmenu = () => {
    return inquirer.prompt([{
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Exit"]
    }]).then(answer => {
        console.log(answer.action)
        if (answer.action === "View all departments") {

            viewAllDepartments();

        }
        if (answer.action === "View all roles") {
            viewAllRoles();
        }
        if (answer.action === "View all employees") {
            viewAllEmployees();
        }
        if (answer.action === "Add a department") {
            addDepartment()
        }
        if (answer.action === "Add a role") {
            addRole()
        }
        if (answer.action === "Add an employee") {
            addEmployee()
        }
        if (answer.action === "Update an employee role") {
            updateEmployeeRole()
        }
        if (answer.action === "Exit") {
            exit()
        }
    })
}

mainmenu()

const viewAllDepartments = () => {
    return connection.query(
        `SELECT * FROM departments`,
        function (err, result) {
            if (err) console.error(err);
            let formattedResult = result.map(obj => Object.values(obj));
            formattedResult.unshift(["id", "name"]);
            console.table(formattedResult);
            mainmenu();
        }
    )
}

const viewAllRoles = () => {
    return connection.query(
        `SELECT * FROM roles`,
        (err, result) => {
            if (err) console.error(err);
            let formattedResult = result.map(obj => Object.values(obj));
            formattedResult.unshift(["department_id", "title", "salary"]);
            console.table(formattedResult);
            mainmenu();
        }
    )
}

const viewAllEmployees = () => {
    return connection.query(
        `SELECT first_name, last_name, role_id, manager_id FROM employees`,
        (err, result) => {
            if (err) console.error(err);
            let formattedResult = result.map(obj => Object.values(obj));
            formattedResult.unshift(["first_name", "last_name", "role_id", "manager_id"]);
            console.table(formattedResult);
            mainmenu();
        }
    )
}

const addDepartment = () => {
    return inquirer.prompt([{
        name: "name",
        type: "input",
        message: "What department would you like to add?"
    }]).then(data => {
        connection.query(`INSERT INTO departments SET ?`,
            {
                department_name: data.name
            },
            function (err, result) {
                if (err) {
                    console.log(err);
                }
                console.log(`Added ${data.name} to departments tables`)
                mainmenu();
            })
    })
}

const addRole = () => {
    return inquirer.prompt([{
        name: "title",
        type: "input",
        message: "What is the name of the role you would like to add?",
    },
    {
        name: "salary",
        type: "input",
        message: "What is the salary of this role?",
    },

    ]).then(data => {

        connection.query(`INSERT INTO roles SET ?`,
            {
                title: data.title,
                salary: data.salary,
            },
            function (err, result) {
                if (err) {
                    console.log(err);
                }
                console.log(`Added ${data.title} to roles table`)
                mainmenu();
            })

    })
}

const addEmployee = () => {
    return inquirer.prompt([{
        name: "first_name",
        type: "input",
        message: "What is this employee's first name?",
    },
    {
        name: "last_name",
        type: "input",
        message: "What is this employee's last name?",
    },
    {
        name: "role_id",
        type: "input",
        message: "What is this employees role?",
    },
    {
        name: "manager_id",
        type: "input",
        message: "What is the managers ID for this employee?",
    }]).then(data => {
        //figure out how to put data into specific roles categories
        connection.query(`INSERT INTO employees SET ?`,
            {
                first_name: data.first_name,
                last_name: data.last_name,
                role_id: data.role_id,
                manager_id: data.manager_id
            },
            function (err, result) {
                if (err) {
                    console.log(err);
                }
                mainmenu();
            })
    })
}

function updateEmployeeRole() {
    connection.query(`SELECT * FROM employees`, (err, data) => {
        if (err) throw err;
        const employees = data.map(({ id, first_name, last_name }) => ({ name: first_name + " " + last_name, value: id }));
        inquirer.prompt([
            {
                type: 'list',
                name: 'name',
                message: "Which employee would you like to update?",
                choices: employees
            }
        ])
            .then(empChoice => {
                const employee = empChoice.name;
                const params = [];
                params.push(employee);
                connection.query(`SELECT * FROM roles`, (err, data) => {
                    if (err) throw err;
                    const roles = data.map(({ id, title }) => ({ name: title, value: id }));
                    inquirer.prompt([
                        {
                            type: 'list',
                            name: 'role',
                            message: "What is the employee's new role?",
                            choices: roles
                        }
                    ])
                        .then(roleChoice => {
                            const role = roleChoice.role;
                            params.push(role);
                            let employee = params[0]
                            params[0] = role
                            params[1] = employee
                            connection.query(`UPDATE employees SET role_id = ? WHERE id = ?`, params, (err, result) => {
                                if (err) throw err;
                                console.log("Employee has been updated!");

                                mainmenu();
                            });
                        });
                });
            });
    });
};

const exit = () => {
    connection.end();
}