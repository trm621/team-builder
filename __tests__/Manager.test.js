const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("checks for office number", () => {
    const manager = new Manager()
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('checks to see if role is switched', () => {
    const manager = new Manager()
    expect(manager.role).toEqual("Manager");
})