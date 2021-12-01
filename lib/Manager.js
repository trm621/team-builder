const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor() {
    
    this.officeNumber = officeNumber;

    }
getRole() {
    const role = this.role;
    switch (role) {
        case 'Manager':
        this.role = "Manager";
        break;
    }
}
}

module.exports = Manager;