
const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager();

    expect(manager.officeNumber()).toEqual(expect.any(Number));
});

test('set role of employee to manager', () => {
    const manager = new Manager();

    expect(manager.getRole()).toEqual("Manager");
});