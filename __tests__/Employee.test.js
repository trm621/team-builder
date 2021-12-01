const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('checks to see if an employee object is made', () => {
    const employee = new Employee();
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets the employee's name", () => {
    const employee = new Employee();

    expect(employee.getName()).toEqual(expect.any(String))
});

test("gets the employee's id number", () => {
    const employee = new Employee();

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test("gets employee's full description", () => {
    const employee = new Employee();

    expect(employee.getEmail()).toEqual(expect.any(Object));
});