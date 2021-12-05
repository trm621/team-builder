const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const fs = require('fs');
const generatePage = require('./utils/generate-page');

const initializeApp = teamMates => {
    if (!teamMates) {
        teamMates = [];
    }
    return inquirer
        .prompt([{
            type: 'input',
            name: 'name',
            message: "Please enter a teammate's name."
        },
        {
            type: 'number',
            name: 'id',
            message: "Please enter your teammate's ID number",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your teammate's email address."
        },
        {
            type: 'checkbox',
            name: 'role',
            message: "Please select your teammate's role.",
            choices: ["Manager", "Intern", "Engineer"]
        }])
        .then(newEmployee => {
            teamMates.push(newEmployee)
            return newEmployee,
            createNewEmployee(newEmployee)
        })
    };

const createNewEmployee = (newEmployee) => {
    if (newEmployee === "Manager") {
        console.log("Manager created!");
    }
}

writeToFile = fileContent => {
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

const copyFile = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Stylesheet created!'
        });
      });
    });
  };

initializeApp()
  .then(newEmployee => {
      return createNewEmployee(newEmployee)
  })
    
// .then(teamMateInfo => {
//     return generatePage(teamMateInfo);
// })
// .then(fileContent => {
//     return writeToFile(fileContent);
// })
// .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile(writeFileResponse);
// })
// .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
