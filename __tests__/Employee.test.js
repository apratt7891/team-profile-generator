

const Employee = require('../lib/Employee');

// sets up the Employee object//
test('creates an employee object', () => {
    const employee = new Employee('Amber', 6148880, 'amber.pratt@aexp.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// source of Employee name// 
test('gets employee name', () => {
    const employee = new Employee('Amber', 6148880, 'amber.pratt@aexp.com');

    expect(employee.getName()).toEqual(expect.any(String));
});
// source of Employee ID// 
test('gets employee ID', () => {
    const employee = new Employee('Amber', 6148880, 'amber.pratt@aexp.com');

    expect(employee.getId()).toEqual(expect.any(String));
});
// source of Employee email// 
test('gets employee email', () => {
    const employee = new Employee('Amber', 6148880, 'amber.pratt@aexp.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// sets Employee role as Employee// 
test('sets role as Employee', () => {
    const employee = new Employee('Amber', 6148880, 'amber.pratt@aexp.com');

    expect(employee.getRole()).toEqual("Employee");

});
