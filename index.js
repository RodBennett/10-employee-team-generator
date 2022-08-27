// import all classes and constructor files into Index
const Employee = require("./lib/employee.js")
//const Manager = require("./lib/manager.js")
const Engineer = require("./lib/engineer.js")
//const Intern = require("./lib/intern.js")

// import inquirer, file system and generator HTML
const inquirer = require("inquirer")
//const generateHTML = require("./utils/generateHTML.js")
const fs = require("fs")


// global variable for exit program question to be asked at the end of each series
const exitQuestion = [
    {
    type: "list",
    message: "Would you like to enter another employee?",
    name: "exit",
    choices: [
        "Yes",
        "No",
    ]}]

// commom questions for the user for all employee types
const prompts = [
    
        {
            type: "input",
            message: "What is your team member's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your the team member's id number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is team member's email address?",
            name: "email",
        },
        {
            type: "list",
            message: "What is your team member's job title?",
            name: "role",
            choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]}, 
    ]

inquirer.prompt ([
    ...prompts,
])

// when user answers last question about which employee type, a special question appears for that particular employee type
.then((data) => {
    if(data.role === "Manager") {
        inquirer.prompt ([
            {
                type: "input",
                message: "What is your manager's office number?",
                name: "office",
            },
                ...exitQuestion,
        ])
        .then((data) => {
            if(data.exit === "Yes") {
                return inquirer.prompt([
                    ...prompts,
                ])
            } else {
                console.log("Your roster is done")
            }
        })
    } else if (data.role === "Engineer") {
        inquirer.prompt ([
            {
                type: "input",
                message: "Please enter your GitHub profile link.",
                name: "github"
            },
                ...exitQuestion,
      ])
        .then((data) => {
            if(data.exit === "Yes") {
                return inquirer.prompt([
                    ...prompts,
                ])
            } else {
                console.log("Your roster is done")
            }
        })
    } else if (data.role === "Intern") {
        inquirer.prompt ([
            {
                type: "input",
                message: "What school is the intern from?",
                name: "school",
            },
                ...exitQuestion,
        ])
        .then((data) => {
            if(data.exit === "Yes") {
                return inquirer.prompt([
                    ...prompts,
                ])
            } else {
                console.log("Your roster is done")
            }
        })
    }      
})

.then((data) => {
    const writeToFile = generateHTML(data)
    fs.writeFile("./dist/index.html", writeToFile, (err) =>
    err ? console.log(err) : console.log("Successfully created Employee Roster."))
}) 
