const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require(console.table);
const db = require('./db');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})