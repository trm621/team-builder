const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(newTeamMate) {
        super(newTeamMate);
    
    this.officeNumber = officeNumber;
    }

getRole() {
    var newRole = this.role;
    switch (newRole) {
        case 'Employee':
            this.role = "Manager";
            break;
    }
    return this.role
}
};

module.exports = Manager;