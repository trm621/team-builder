const Employee = require('../lib/Employee')

class Engineer extends Employee {
    constructor(name) {
        super(name);

        this.github = github;
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
};

module.exports = Engineer;