// import all constructor files into Index
const Manager = require("./lib/manager.js")
const Engineer = require("./lib/engineer.js")
const Intern = require("./lib/intern.js")

// import generateTeam function from generateHTML js page
const generateTeam = require("./src/generateHTML.js")

// import inquirer, file system and generator HTML
const inquirer = require("inquirer")
const fs = require("fs")

// create an empty array to push data answers from user into to create string of all employee's data
const teamMembers = []

// variable for employee menu
const employeeQuestion = [
    {
        type: "list",
            message: "Which role would you like to create a roster entry for?",
            name: "role",
            choices: [
            "Manager",
            "Engineer",
            "Intern",
            ]
        }
]
// variable for common questions for all types
const commonQuestions = [
    {
        type: 'input',
        message: "What is your employee's name?",
        name: 'name',
    },
    {
        type: "input",
        message: "What is your team member's id number?",
        name: "id",
    },
    {
        type: "input",
        message: "What is your team member's email address?",
        name: "email",
    },
]

// function to ask user to add new employee or exit
const addEmployee = () => {
    inquirer.prompt([
    {
        type: 'list',
        message: "Would you like to add another team member?",
        name: "add",
        choices: [
            "Yes",
            "No",
        ]
    }
]) .then((data) => {
    if(data.add === "Yes") {
        choice()
    } else {
        wholeTeam()
    }
})
}

// function to prompt questions and capture data for user
const choice = () => {
    inquirer.prompt ([
            ...employeeQuestion,
        ])
        .then((data) => {
            switch (data.role) {
                case "Manager" :
                inquirer.prompt ([
                    ...commonQuestions,
                    {
                        type: "input",
                        message: "What is your manager's office number?",
                        name: "office",
                    },
                ])
                .then((data) => {
                    let manager = new Manager (data.name, data.id, data.email, data.office)
                    teamMembers.push(manager)
                    addEmployee()
                });
                    break;
                case "Engineer" : 
                inquirer.prompt([
                    ...commonQuestions,
                    {
                        type: 'input',
                        message: "What is the engineer's GitHub profile link?",
                        name: 'github'
                    },
                ])
                .then((data) => {
                    let engineer = new Engineer (data.name, data.id, data.email, data.github)
                    teamMembers.push(engineer)
                    addEmployee()
                });
                    break;
                case "Intern" : 
                inquirer.prompt([
                    ...commonQuestions,
                    {
                        type: 'input',
                        message: "What school is the intern from?",
                        name: 'school',
                    },
                ])
                .then((data) => {
                    let intern = new Intern (data.name, data.id, data.email, data.school)
                        teamMembers.push(intern)
                        addEmployee()
                });  
            }
        }) 
}

// function to send all collected data to the generateTeam function on the generateHTML file
const wholeTeam = () => {
    fs.writeFile('./dist/team.html', generateTeam(teamMembers), (err) =>
    err ? console.log(err) : console.log('Your team roster has been created!'))
};

// call for the choice function to prompt questions 
choice()