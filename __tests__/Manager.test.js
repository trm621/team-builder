const Manager = require("../lib/Manager");

test('checks to see if an manager object is made', () => {
    const manager = new Manager();

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test("checks for office number", () => {
    const manager = new Manager()
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('checks to see if role is switched', () => {
    const manager = new Manager()
    expect(manager.getRole()).toEqual("Manager");
});