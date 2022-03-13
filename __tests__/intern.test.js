const Intern = require('../lib/Intern');

test('Creates an Intern Object', () => {
    const intern = new Intern('Smith', 12345, 'intern@gmail.com', 'school university');

    expect(intern.name).toBe('Smith');
    expect(intern.id).toEqual(12345);
    expect(intern.email).toBe('intern@gmail.com');
    expect(intern.school).toBe('school university');
    expect(intern.role).toBe('Intern');
});