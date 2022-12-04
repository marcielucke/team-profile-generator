const Intern = require('../lib/intern');
const testIntern = new Intern ("Marcie", 3, "marcielucke@aol.com", "marcielucke");

test ("test if we can get name through getName function", () => {
    expect(testIntern.getName()).toBe("Marcie");
}) ;