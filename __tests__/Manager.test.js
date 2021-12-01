const Manager = require("../lib/Manager");

test("checks for office number", () => {
    const manager = new Manager()
    expect(manager.officeNumber).toEqual(expect.any(Number));
});