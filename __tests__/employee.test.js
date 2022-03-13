const Employee = require('../lib/__mocks__/Employee')

jest.mock('../lib/Employee')

test('creates employee object', () => {
    const employee = new Employee()

    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual(12345);
    expect(employee.email).toBe('test@gmail.com');
    expect(employee.role).toBe('Employee');
})