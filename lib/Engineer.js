const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);

        this.github = github;
    }

    getGitHub () {
        return this.github;
    }
//changes role of employee to Engineer//
    getRole () {
        return "Engineer";
    }
}

// to be exported //
module.exports = Engineer; 