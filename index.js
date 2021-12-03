const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const fs = require('fs');
const generatePage = require('./utils/generate-page')

const initializeApp = () => {
    return inquirer
        .prompt({
            type: 'input',
            name: 'name',
            message: "Please enter a teammate's name."
        })

    }

const gatherInfo = teamMateData => {
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
            return teamMateInfo;
        })
    };

const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
            reject(err);
            return;
        }
      
        resolve({
            ok: true,
            message: 'File created!'
        });
    });
});
};

initializeApp()
    .then(teamMateName => {
        return gatherInfo(teamMateName)
})
.then(pageHTML => {
    return generatePage(pageHTML);
})
.then(fileContent => {
    return writeToFile(fileContent);
})
