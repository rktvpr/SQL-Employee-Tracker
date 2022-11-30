const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('table');
const connection = require('./db/connection.js');




const mainmenu = () => {
    return inquirer.prompt([{
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "exit"]
    }]).then(answer => {
        console.log(answer.action)
        switch (answer.action) {
            case "View all Departments":
                viewAllDepartments();
                break;

            case "View all roles":
                viewAllRoles();
                break;

            case "View all employees":
                viewAllEmployees();
                break;

            case "Add a department":
                addDepartment();
                break;

            case "Add a role":
                addRole();
                break;

            case "Add an Employee":
                addEmployee();
                break;

            case "Update an Employee role":
                updateEmployeeRole();
                break;

            case "exit":
                exit();
                break;
        }
    })
}

const viewAllDepartments = () => {
    return connection.query(
        `SELECT * FROM departments`,
        (err, result) => {
            if (err) console.error(err);
            let formattedResult = result.map(obj => Object.values(obj));
            formattedResult.unshift(["id", "name"]);
            console.log(cTable(formattedResult));
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
            console.log(cTable(formattedResult));
            mainmenu();
        }
    )
}

const viewAllEmployees = () => {
    return connection.query(
        `SELECT * FROM employees`,
        (err, result) => {
            if (err) console.error(err);
            let formattedResult = result.map(obj => Object.values(obj));
            formattedResult.unshift(["first_name", "last_name", "role_id", "manager_id"]);
            console.log(cTable(formattedResult));
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
            [
                data
            ],
            function (err, result) {
                if (err) {
                    console.log(err);
                }
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
    {
        name: "department_id",
        type: "input",
        message: "What is the department ID for this role?",
    }]).then(data => {
        //figure out how to put data into specific roles categories
        connection.query(`INSERT INTO roles SET ?`
        [
            data
        ],
            function (err, result) {
                if (err) {
                    console.log(err);
                }
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
        name: "manager_id",
        type: "input",
        message: "What is the managers ID for this employee?",
    }]).then(data => {
        //figure out how to put data into specific roles categories
        connection.query(`INSERT INTO employees SET ?`
        [
            data
        ],
            function (err, result) {
                if (err) {
                    console.log(err);
                }
                mainmenu();
            })
    })
}

const updateEmployeeRole = () => {
    //create function
}

const exit = () => {
    connection.end();
}