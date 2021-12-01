class Employee {
    constructor() {
        this.name = "Dave";
        this.id = 42;
        this.email = "fdsfsd";
        this.role = "Employee"
    }
    getName() {
        return `${this.name}`;
    }
    getId() {
        return this.id
    }
    getEmail() {
        return `${this.email}`;
    }
}

module.exports = Employee;