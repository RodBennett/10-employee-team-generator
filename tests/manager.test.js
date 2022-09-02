//import manager constructor for testing
const Manager = require('../lib/manager.js')

//create global variable to pass arguments into manager constructor parameters
const manager = new Manager ("Rod", 15, "test@test.com", 418)

// test for super Employee class parameters
describe("Manager", () => {
  describe("parent properties", () => {
    it("should return input properties for the employee parameters", () => {
      expect(manager.name).toBe("Rod");
      expect(manager.id).toBe(15);
      expect(manager.email).toBe("test@test.com");
    })
  });
  // test for manager class methods
  describe("test to see if we can get the value passed into getOffice method", () => {
    it("should return specified values of methods in the manager subclass", () => {
      expect(manager.getOffice()).toBe(418)
    });
  });
  describe("test to see if getRole function is working in the manager subclass", () => {
    it("should return the value of the getRole value manager", () => {
      expect(manager.getRole()).toBe("Manager")
    })
  })
})
