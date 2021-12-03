const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const initializeApp = () => {
    return inquirer
        .prompt({
            type: 'input',
            name: 'name',
            message: "Please enter a teammate's name."
        })

    }

const gatherInfo = teamMateData => {
    if (!teamMateData) {
        teamMateData = [];
    }
    return inquirer.prompt([
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
        }])
        .then(teamMateInfo => {
            teamMateData.push(teamMateInfo)
            return teamMateInfo
        })
    };

const generatePage = teamMateInfo => {
    return `
    `
}

initializeApp()
    .then(teamMateName => {
        return gatherInfo(teamMateName)
})
.then(pageHTML => {
    return generatePage(pageHTML);
})
