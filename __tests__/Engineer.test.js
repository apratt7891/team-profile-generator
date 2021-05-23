// using Employee constructor// 
const Engineer = require('../lib/Engineer');

// sets up the Engineer object//
test('creates an Engineer object', () => {
    const engineer = new Engineer('Amber', 6148880, 'amber.pratt@aexp.com', 'apratt7891');

    expect(engineer.github).toEqual(expect.any(String));
});

// gets GitHub username from getGitHub() //
test('sets engineer github username', () => {
    const engineer = new Engineer('Amber', 6148880, 'amber.pratt@aexp.com', 'apratt7891');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// sets Employee role as Engineer// 
test('set role of employee to engineer', () => {
    const engineer = new Engineer('Amber', 6148880, 'amber.pratt@aexp.com', 'apratt7891');

    expect(engineer.getRole()).toEqual("Engineer");
});