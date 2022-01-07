const Employee = require("./Employee");

class Manager {
    constructor(name, id, email, officeNumber) {
        Employee.call(this, name, id, email);
        this.officeNumber = officeNumber;
    }
    getGithub() {
        return this.officeNumber;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Manager;