// import Employee class
const Employee = require("./employee.js")

// code to add Intern prototype to Employee class and adds argument for 'school"
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}
  
  module.exports = Intern;
