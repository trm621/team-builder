const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, school) {
        super(name);

        this.school = school;
    }
    getRole() {
        var newRole = this.role;
        switch (newRole) {
            case 'Employee':
            this.role = "Engineer";
            break;
        }
        return this.role
    }
}

module.exports = Intern;