
const Manager = require('../lib/manager');
const testManager = new Manager ("Marcie", 3, "marcielucke@aol.com", 4);

test ("test if we can get name through getName function", () => {
    expect(testManager.getName()).toBe("Marcie");
}) 