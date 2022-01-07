const Employee = require("./Employee");

class Intern {
    constructor(name, id, email, school) {
        Employee.call(this, name, id, email);
        this.school = school;
    }
    getGithub() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;