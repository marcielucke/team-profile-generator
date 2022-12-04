const Employee = require('../lib/employee');
const testEmployee = new Employee ("Marcie", 3, "marcielucke@aol.com");

test ("test if we can get name through getName function", () => {
    expect(testEmployee.getName()).toBe("Marcie");
}) 