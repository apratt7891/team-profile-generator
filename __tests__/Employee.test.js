// using Employee constructor 

const Employee = require('../lib/Employee');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets id from getId() 
test('gets employee name', () => {
    const employee = new Employee();

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
    const employee = new Employee();

    expect(employee.getId()).toEqual(expect.any(String));
});

test('gets employee email', () => {
    const employee = new Employee();

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
test('sets role as Employee', () => {
    const employee = new Employee();

    expect(employee.getRole()).toEqual("Employee");

});
