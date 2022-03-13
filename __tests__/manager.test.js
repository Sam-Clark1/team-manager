const Manager = require('../lib/Manager');

test('Creates an Intern Object', () => {
    const manager = new Manager('Brian', 12345, 'manager@gmail.com', 100);

    expect(manager.name).toBe('Brian');
    expect(manager.id).toEqual(12345);
    expect(manager.email).toBe('manager@gmail.com');
    expect(manager.officeNumber).toEqual(100);
    expect(manager.role).toBe('Manager');
});