// // // function to create the whole team
const generateTeam = team => {
    const htmlSections = [];

// functions to generate HTML sections of employees
    const generateManager = manager => {
        let managerSection =
            `<div class="cards">
        <div class="card-header">
            <h2 class="card-header name">${manager.name}</h2>
            <h2 class="fas fa-mug-hot">  Manager</h2>
        </div>
            <p class="id">ID: ${manager.id}</p>
            <p>Email: <span><a href="mailto:${manager.email}">${manager.email}</a></span></p>
            <p class="office">Office: ${manager.office}</p>
        </div>`;
        htmlSections.push(managerSection)
    };

    const generateEngineer = engineer => {
        let engineerSection =
            `<div class="cards">
            <div class="card-header">
                <h2 class="card-header name">${engineer.name}</h2>
                <h2 class="fas fa-glasses">  Engineer</h2>
            </div>
                <p>ID: ${engineer.id}</p>
                <p>Email: <span><a href="mailto:${engineer.email}">${engineer.email}</a></span></p>
                <p>Github: <span><a href="${engineer.github}" target="_blank">${engineer.github}</a></span></p>
            </div>`;
        htmlSections.push(engineerSection)
    };

    const generateIntern = intern => {
        let internSection =
            `<div class="cards">
                <div class="card-header">
                    <h2 class="card-header name">${intern.name}</h2>
                    <h2 class="fas fa-user-graduate">  Intern</h2>
                </div>
                    <p>ID: ${intern.id}</p>
                    <p>Email: <span><a href="mailto:${intern.email}">${intern.email}</a></span></p>
                    <p>School: ${intern.school}</p>
                </div>`;
        htmlSections.push(internSection)
    };

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        } else if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        } else if (team[i].getRole() === "Intern") {
            generateIntern(team[i])
        }
    }
    return buildTeamPage(htmlSections)
}
//module.exports = team => 
const buildTeamPage = (html) => {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
        />
        <link rel="stylesheet" href="style.css">

    </head>
    <header>
        <h1>My Team</h1>
    </header>
    <body>
        <section>  ${html}  </section>
    </body>
    </html> 
    `;

}

module.exports = generateTeam