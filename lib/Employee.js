const inquirer = require("inquirer");
// const Engineer = require('./lib/Engineer');
// const Manager = require('./lib/Manager');
// const Intern = require('./lib/Intern');

class Employee {
    constructor() {
        this.name;
        this.id;
        this.email;
        this.role;
    }
    initializeApp() {
        inquirer.prompt(
            {
                type: 'input',
                name: 'name',
                message: "Please enter your teammate's name." 
            })
        .then(({ name }) => {
            this.name = name

            this.getId();
        })}
    getId() {
        inquirer.prompt(
            {
                type: 'input',
                name: 'id',
                message: "Please enter your teammate's ID number."
            })
        .then(({ id }) => {
            this.id = id

            this.getEmail();
        })};
    getEmail() {
        inquirer.prompt(
            {
                type: 'input',
                name: 'email',
                message: "Please input your teammate's email address."
            })
        .then(({ email }) => {
            this.email = email

            this.getRole();
        })};
    getRole() {
        inquirer.prompt(
            {
                type: 'checkbox',
                name: 'role',
                message: "Please select your teammate's role.",
                choices: ['Manager', 'Engineer', 'Intern'],
            })
        .then(({ role }) => {
            this.role = role

            this.createEmployee();
        })};
    createEmployee() {
        if (this.role = ['Manager']) {
        }
    }
}

module.exports = Employee;