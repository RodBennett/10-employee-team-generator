// // // import constructors to receive data
// // const Intern = require('../lib/intern.js')
// // const Manager = require('../lib/manager.js')
// // const Engineer = require('../lib/engineer.js')
// // const Employee = require('../lib/employee.js')


// // // function to create the whole team
// const generateTeam = team => {
//     console.log(team)
//     const htmlSections = [];

// // functions to generate HTML sections of employees
//     const generateManager = manager => {
//         console.log(manager)
//     let managerSection = 
//     `<div class="cards">
//         <div class="card-header">
//             <h2 class="card-header name">${manager.name}</h2>
//             <h2 class="fas fa-mug-hot">  Manager</h2>
//         </div>
//             <p class="id">ID: ${manager.id}</p>
//             <p class="email">Email: </p><a href="mailto:${manager.email}"></a>
//             <p class="office">Office: ${manager.office}</p>
//         </div>`;
//         htmlSections.push(managerSection)
//         console.log(htmlSections)
//     };

//     const generateEngineer = engineer => {
//         let engineerSection = 
//         `<div class="cards">
//             <div class="card-header">
//                 <h2 class="card-header name">${engineer.name}</h2>
//                 <h2 class="fas fa-mug-hot">  Manager</h2>
//             </div>
//                 <p class="id">ID: ${engineer.id}</p>
//                 <p class="email">Email: </p><a href="mailto:${engineer.email}"></a>
//                 <p class="office">Github profile: <a href="sendto:${engineer.github}></a></p>
//             </div>`;
//             htmlSections.push(engineerSection)
//             console.log(htmlSections)
//         };

//         const generateIntern = intern => {
//             let internSection = 
//             `<div class="cards">
//                 <div class="card-header">
//                     <h2 class="card-header name">${intern.name}</h2>
//                     <h2 class="fas fa-mug-hot">  Manager</h2>
//                 </div>
//                     <p class="id">ID: ${intern.id}</p>
//                     <p class="email">Email: </p><a href="mailto:${intern.email}"></a>
//                     <p class="office">School ${intern.school}</p>
//                 </div>`;
//                 htmlSections.push(internSection)
//                 console.log(htmlSections)
//             };

//             if("Manager") {
//                 generateManager()
//             } else if ("Engineer") {
//                 generateEngineer()
//             } else {
//                 generateIntern()
//             }

// module.exports = team => {

//      return `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//         <link rel="stylesheet" href="style.css">
//     </head>
//     <header>
//         <h1>My Employees</h1>
//     </header>
//     <body>
//     <section> ${generateTeam(team)} </section>
//     </body>
//     </html> 
//     `;
// }
// }

// module.exports = generateTeam