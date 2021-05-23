const Intern = require('../lib/Intern');

// sets up the Intern object//
test('creates an Intern object', () => {
    const intern = new Intern();

    expect(intern.school).toEqual(expect.any(String));
});

// source of Intern school name// 
test('gets Intern school name', () => {
    const intern = new Intern();

    expect(intern.getSchool).toEqual(expect.stringContaining(intern.school.toString()));
});

// sets Employee role as Intern// 
test('set role of Employee to Intern', () => {
    const intern = new Intern();

    expect(intern.getRole()).toEqual("Intern");
});