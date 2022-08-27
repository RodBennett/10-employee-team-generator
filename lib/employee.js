// create class for Employee with super properties to be extended to all sublcasses

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
     // code for class methods
     getName() {
        return this.name
     }
     getID() {
        return this.id
     }
     getEmail() {
        return this.email
     }
     getRole() {
      return "Employee"
     }
}

module.exports = Employee