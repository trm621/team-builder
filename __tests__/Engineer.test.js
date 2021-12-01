const Engineer = require("../lib/Engineer");

test('checks to see if an intern object is made', () => {
    const engineer = new Engineer();

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});


test('checks to see if role is switched', () => {
    const engineer = new Engineer()
    expect(engineer.getRole()).toEqual("Engineer");
});