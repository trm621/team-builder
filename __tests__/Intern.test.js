const Intern = require('../lib/Intern')

test('checks to see if an intern object is made', () => {
    const intern = new Intern('Dave');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('checks to see if role is switched', () => {
    const intern = new Intern()
    expect(intern.getRole()).toEqual("Intern");
});