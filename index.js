// const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const fs = require('fs');
// const generatePage = require('./utils/generate-page');
// const teamMates = [];

new Employee().initializeApp();



// writeToFile = fileContent => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./dist/index.html', fileContent, err => {
//         if (err) {
//             reject(err);
//             return;
//         }
      
//         resolve({
//             ok: true,
//             message: 'File created!'
//         });
//     });
// });
// };

// const copyFile = () => {
//     return new Promise((resolve, reject) => {
//       fs.copyFile('./src/style.css', './dist/style.css', err => {
//         if (err) {
//           reject(err);
//           return;
//         }
  
//         resolve({
//           ok: true,
//           message: 'Stylesheet created!'
//         });
//       });
//     });
//   };

// initializeApp();
    
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
