const { handlePotentialSyntaxError } = require('@jest/transform');
const Employee = require('../lib/Employee');

test('checks to see if an employee object is made', () => {
    const employee = new Employee('Dave');
    expect(employee.name).toEqual('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets the employee's name", () => {
    const employee = new Employee('Dave');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name))
});

test("gets the employee's id number", () => {
    const employee = new Employee('Dave');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets the employee's email address", () => {
    const employee = new Employee('Dave');

    expect(employee.getEmail()).toEqual(expect.any(String));
})

test("gets employee's description", () => {
    const employee = new Employee('Dave');

    expect(employee.getRole()).toEqual(expect.any(String));
});