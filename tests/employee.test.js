//import Employee class for testing
const Employee = require('../lib/employee.js')

//create global variable for to pass arguments into Employee class parameters
const employee = new Employee ("Rod", 15, "test@test.com")

// test for Employee class properties/parameters
describe("Employee", () => {
  describe("parent properties", () => {
    it("should return input properties for the employee parameters", () => {
      expect(employee.name).toBe("Rod");
      expect(employee.id).toBe(15);
      expect(employee.email).toBe("test@test.com");
    })
  });
  // tests for Employee class methods
  describe("test to see if we can get the value passed into getName method", () => {
    it("should return specified values into the class methods of the Employee class", () => {
      expect(employee.getName()).toBe("Rod")
    });
  })
  describe("test to see if we can get the value passed into getId method", () => {
    it("should return specified values into the class methods of the Employee class", () => {
      expect(employee.getID()).toBe(15)

    });
  })
  describe("test to see if we can get the value passed into getEmail method", () => {
    it("should return specified values into the class methods of the Employee class", () => {
      expect(employee.getEmail()).toBe("test@test.com")
    });
  });
})
