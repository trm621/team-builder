const Engineer = require("../lib/Engineer");

test('checks to see if role is switched', () => {
    const engineer = new Engineer()
    expect(engineer.getRole()).toEqual("Engineer");
});