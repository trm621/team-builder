const Intern = require('../lib/Intern')

test('checks to see if role is switched', () => {
    const intern = new Intern()
    expect(intern.getRole()).toEqual("Intern");
});