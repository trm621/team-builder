const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, officeNumber) {
        super(name);

        this.name.officeNumber = officeNumber;
    }
    
    createManager() {
        return inquirer.prompt(
            {
                type: 'input',
                name: 'officeNumber',
                message: "Please enter this manager's office number."
            })
        .then(console.log(this.name));
    }
};

module.exports = Manager;