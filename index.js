const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

initializeApp = () => {
    inquirer
        .prompt({
            type: 'input',
            name: 'name',
            message: "Please enter a teammate's name."
        },
        {
            type: 'number',
            name: 'id',
            message: "Please input your teammate's ID number."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please input your teammate's email address."
        },
        {
            type: 'checkbox',
            name: 'role',
            message: "Please select your teammate's role.",
            choices: ["Manager", "Intern", "Engineer"]
            
        })
        .then(({ role }) => {
            this.employee = new Employee(role);
            console.log(this.employee)

});
}

initializeApp();