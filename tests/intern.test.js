//import intern constructor for testing
const Intern = require('../lib/intern.js')

//create global variable to pass arguments into intern constructor parameters
const intern = new Intern ("Rod", 15, "test@test.com", "Yale/Jail")

// test for super Employee class parameters
describe("Intern", () => {
  describe("parent properties", () => {
    it("should return input properties for the Employee parameters", () => {
      expect(intern.name).toBe("Rod");
      expect(intern.id).toBe(15);
      expect(intern.email).toBe("test@test.com");
    })
  });
  // test intern class methods
  describe("test to see if we can get the value passed into getSchool method", () => {
    it("should return specified values of methods in the intern subclass", () => {
      expect(intern.getSchool()).toBe("Yale/Jail")
    });
  });
  describe("test to see if getRole function is working in the intern subclass", () => {
    it("should return the value of the getRole value intern", () => {
      expect(intern.getRole()).toBe("Intern")
    })
  })
})
