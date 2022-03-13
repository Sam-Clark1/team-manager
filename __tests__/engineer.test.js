const Engineer = require('../lib/Engineer');

test('Creates an Engineer Object', () => {
    const engineer = new Engineer('John', 12345, 'engineer@gmail.com', 'john1');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toEqual(12345);
    expect(engineer.email).toBe('engineer@gmail.com');
    expect(engineer.github).toBe('john1');
    expect(engineer.role).toBe('Engineer');
});