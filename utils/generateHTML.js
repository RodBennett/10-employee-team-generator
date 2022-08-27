// function to generate HTML file
function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <header>
        <h1>My Employees</h1>
    </header>
    
    <body>
        <section class="card-container">
            <div class="cards">
                <h3 class="card-header">Employee Name: ${name}</h3>
                <p class="job-title">Job Title ${data.role}</p>
                <p class="id">Employee ID: ${data.id}</p>
                <p class="office">Office #: ${data.office}</p>
                <p class="email">Email: ${data.email}</p>
                <p class="school">School: ${data.school}</p>
                <P> class="github">Github link ${data.github}</p>
            </div>
        </section>
    </body>
    </html>`
}

module.exports = generateHTML;