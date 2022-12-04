const Engineer = require('../lib/engineer');
const testEngineer = new Engineer ("Marcie", 3, "marcielucke@aol.com", "marcielucke");

test ("test if we can get name through getName function", () => {
    expect(testEngineer.getName()).toBe("Marcie");
}) ;