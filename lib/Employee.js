class Employee {
    constructor() {
        this.name = "Dave";
        this.id = 42;
        this.email = "allan@allan.com";
    }
    getName() {
        return `${this.name}`;
    }
    getId() {
        return `${this.id}`
    }
    getEmail() {
        return `${this.email}`;
    }
    getRole() {
        return `Employee`
    }
}

module.exports = Employee;