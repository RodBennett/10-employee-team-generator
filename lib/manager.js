// import Employee class
const Employee = require("./employee.js")

// code to add Manager prototype to Employee class and adds argument for 'office number'
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office
    }

    // constructor methods for manager
    getOffice() {
        return this.office
    }
    getRole (){
        return "Manager"
    }
}

module.exports = Manager