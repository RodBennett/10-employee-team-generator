//import Engineer constructor for testing
const Engineer = require('../lib/engineer.js')

//create global variable to pass arguments into Engineer constructor parameters
const engineer = new Engineer ("Rod", 15, "test@test.com", "github@github.com")

// test for super Employee class parameters
describe("Engineer", () => {
  describe("parent properties", () => {
    it("should return input properties for the employee parameters", () => {
      expect(engineer.name).toBe("Rod");
      expect(engineer.id).toBe(15);
      expect(engineer.email).toBe("test@test.com");
    })
  });
  // test Engineer class
  describe("test to see if we can get the value passed into getGithub method", () => {
    it("should return specified values of methods in the Engineer subclass", () => {
      expect(engineer.getGitHub()).toBe("github@github.com")
    });
  });
  describe("test to see if getRole function is working in the Engineer subclass", () => {
    it("should return the value of the getRole value engineer", () => {
      expect(engineer.getRole()).toBe("Engineer")
    })
  })
})
