


const Engineer = require('../lib/Engineer');
// sets up the Engineer object//
test('creates an Engineer object', () => {
    const engineer = new Engineer();

    expect(engineer.github).toEqual(expect.any(String));
});
// source of Engineer github username// 
test('sets engineer github username', () => {
    const engineer = new Engineer();

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
// sets Employee role as Engineer// 
test('set role of employee to engineer', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual("Engineer");
});