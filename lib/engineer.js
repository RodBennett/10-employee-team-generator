// import Employee class
const Employee = require("./employee.js")

// code to add Engineer prototype to Employee class adding 'github' argument
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    // constructor methods for Engineer
    getGitHub() {
        return this.github
    }
    getRole (){
        return "Engineer"
    }
}


module.exports = Engineer