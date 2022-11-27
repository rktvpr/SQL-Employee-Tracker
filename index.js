const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const db = require('./db');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})


const initPrompt = () => {
    return inquirer.prompt([{
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
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
        }
    })
}

const viewAllDepartments = () => {
    //create function
}

const viewAllRoles = () => {
    //create function
}

const viewAllEmployees = () => {
    //create function
}

const addDepartment = () => {
    //create function
}

const addRole = () => {
    //create function
}

const addEmployee = () => {
    //create function
}

const updateEmployeeRole = () => {
    //create function
}