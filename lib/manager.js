const Employee = require("./employee");

class Manager extends Employee {
    constructor (officeNumber) {
        super ("Marcie", 3, "marcielucke@aol.com");
        this.officeNumber = officeNumber;
    }

    getName(){
        return this.name
    };

    getOfficeNumber(){
        return this.officeNumber
    }

    getID(){
        return this.id
    };
    getEmail(){
        return this.email
    };

    getRole(){
        return "manager"
    }
    
}

module.exports = Manager;