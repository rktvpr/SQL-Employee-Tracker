# SQL-Employee-Tracker
![Badge](https://img.shields.io/badge/license-MIT-blue.svg)
# Description
This application is a command line Employee Tracker which takes user inputs and puts the information into an SQL database for the user to organize and keep track of their company. It allows users to view all departments, add a department, view roles for the company, add roles to the company, view employees and their information, add employees, and modify employees info.
# Table of Contents 
* [Acceptance-Criteria](#Acceptance_Criteria)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#Credits)
* [Features](#Features)

## Links and images


## Acceptance_Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids

WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database

WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```
# Installation
These are the steps to install this application:
Node, SQL, cTable and Inquirer are required for this application .

# Usage
This is how to use this application:
To use this application open the terminal and input node index.js then simply follow the on screen prompts, then press exit when you are done and it will close out the connection to your mySQL database

# Credits
Credit to: 
Rick Welte
UPENN instructors and tutors

# License
   The MIT License.
      Copyright(c) 2022 .
        
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
  documentation files(the "Software"), to deal in the Software without restriction, including without limitation
  the rights to use, copy, modify, merge, publish, distribute, sublicense, and / or sell copies of the Software, and
  to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions
  of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO 
  THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE 
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
      TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      
# Features
Here are the features to this project:
Viewing and adding employees, roles, and departments with a command line application. 


