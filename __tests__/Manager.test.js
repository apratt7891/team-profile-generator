
const Manager = require('../lib/Manager');

// sets up the Manager object//
test('creates a Manager object', () => {
    const manager = new Manager();

    expect(manager.officeNumber()).toEqual(expect.any(Number));
});

// sets Employee role as Manager// 
test('set role of employee to manager', () => {
    const manager = new Manager();

    expect(manager.getRole()).toEqual("Manager");
});