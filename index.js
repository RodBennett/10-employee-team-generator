// import all constructor files into Index
const Manager = require("./lib/manager.js")
const Engineer = require("./lib/engineer.js")
const Intern = require("./lib/intern.js")
//const generateTeam = require("./utils/generateHTML.js")

// import inquirer, file system and generator HTML
const inquirer = require("inquirer")
const fs = require("fs")


//create an empty array to push data answers from user into to create string of all employee's data
const teamMembers = []

// variable for common questions for all employee typ
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

const commonQuestions = [
    {
        type: 'input',
        message: "What is the employee's name?",
        name: 'name',
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
]

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
        console.log('Your team has been created')
    }
})
}

// global variable for first question: which employee would you like to create?
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
                    console.log(manager)
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
                    console.log(engineer)
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
                        console.log(intern)
                        addEmployee()
                    });  
                   
        }
    }) .then((teamMembers) => {
        // let wholeTeam = generateTeam(teamMembers);
        // fs.writeFile('./dist/team.html', wholeTeam, (err) =>
        // err ? console.log(err) : console.log('Team created'))
       // console.log (teamMembers)
    })
}

choice()
