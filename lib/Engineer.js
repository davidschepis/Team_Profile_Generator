const Employee = require("./Employee");

class Engineer {
    constructor(name, id, email, github) {
        Employee.call(this, name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;