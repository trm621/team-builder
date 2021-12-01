const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, officeNumber) {
        super(name);
    
    this.officeNumber = officeNumber;
    this.role = "Manager";

    }
getRole() {
    var role = this.role;
    switch (role) {
        case 'Manager':
        this.role = "Manager";
        break;
    }
    return this.role
}
};

module.exports = Manager;