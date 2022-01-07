//globals
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Inquirer = require("inquirer");
const fs = require("fs");
const empArray = [];

//questions for prompt
const managerQuestions = [
    "Please enter the team manager's name",
    "Enter the manager's employee ID",
    "Enter the manager's email address",
    "Enter the manager's office number"
];

const addQuestions = "Add engineer, intern, or finish?";

const engineerQuestions = [
    "Please enter the engineer's name",
    "Enter the engineer's ID",
    "Enter the engineer's email",
    "Enter the engineer's github username"
];

const internQuestions = [
    "Please enter the intern's name",
    "Enter the intern's ID",
    "Enter the intern's email",
    "Enter the intern's school"
];

//entry point for app
function init() {
    managerPrompt();
}

//This function handles the prompts for the managers details
function managerPrompt() {
    Inquirer.prompt([
        {
            type: "input",
            message: managerQuestions[0],
            name: "name",
        },
        {
            type: "input",
            message: managerQuestions[1],
            name: "id",
        },
        {
            type: "input",
            message: managerQuestions[2],
            name: "email",
        },
        {
            type: "input",
            message: managerQuestions[3],
            name: "officeNum",
        },
        {
            type: "list",
            message: addQuestions,
            name: "checkContinue",
            choices: ["Add engineer?", "Add intern?", "Finish"],
        }
    ]).then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNum);
        empArray.push(manager);
        if (response.checkContinue === "Add engineer?") {
            addEngineer();
        }
        else if (response.checkContinue === "Add intern?") {
            addIntern();
        }
        else {
            generateWebpage();
        }
    }).catch((error) => {
        console.log(error);
    });
}

//This function handles adding an engineer
function addEngineer() {
    Inquirer.prompt([
        {
            type: "input",
            message: engineerQuestions[0],
            name: "name",
        },
        {
            type: "input",
            message: engineerQuestions[1],
            name: "id",
        },
        {
            type: "input",
            message: engineerQuestions[2],
            name: "email",
        },
        {
            type: "input",
            message: engineerQuestions[3],
            name: "github",
        },
        {
            type: "list",
            message: addQuestions,
            name: "checkContinue",
            choices: ["Add engineer?", "Add intern?", "Finish"],
        }
    ]).then((response) => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        empArray.push(engineer);
        if (response.checkContinue === "Add engineer?") {
            addEngineer();
        }
        else if (response.checkContinue === "Add intern?") {
            addIntern();
        }
        else {
            generateWebpage();
        }
    }).catch((error) => {
        console.log(error);
    });
}

//This function handles adding an intern
function addIntern() {
    Inquirer.prompt([
        {
            type: "input",
            message: internQuestions[0],
            name: "name",
        },
        {
            type: "input",
            message: internQuestions[1],
            name: "id",
        },
        {
            type: "input",
            message: internQuestions[2],
            name: "email",
        },
        {
            type: "input",
            message: internQuestions[3],
            name: "school",
        },
        {
            type: "list",
            message: addQuestions,
            name: "checkContinue",
            choices: ["Add engineer?", "Add intern?", "Finish"],
        }
    ]).then((response) => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        empArray.push(intern);
        if (response.checkContinue === "Add engineer?") {
            addEngineer();
        }
        else if (response.checkContinue === "Add intern?") {
            addIntern();
        }
        else {
            generateWebpage();
        }
    }).catch((error) => {
        console.log(error);
    });
}

function generateWebpage() {
    generateHTML();
    console.log("HTML generated");
    generateCSS();
    console.log("CSS generated");
}

//This function generates the HTML file
function generateHTML() {
    let htmlOutput = "";
    htmlOutput += getHTMLBeginning();
    htmlOutput += '<section id="headerbg" class="container-fluid bg-info">';
    htmlOutput += '<div class="row text-center">';
    htmlOutput += '<h1 id="teamHeader">My team</h1></div>';
    htmlOutput += '</section>';
    htmlOutput += '<section id="mainSection" class="container">';
    htmlOutput += '<div class="row">';
    htmlOutput += generateCards();
    htmlOutput += '</div>';
    htmlOutput += '</section>';
    htmlOutput += getHTMLEnding();
    writeToFile("./dist/index.html", htmlOutput);
}

//This function generates the CSS file
function generateCSS() {
    let cssOutput = "";
    cssOutput += "#teamHeader {font-size: 80px; color:white;}";
    cssOutput += "#headerbg {height: 120px;}";
    cssOutput += ".card img {height:2rem; width:2rem;}"
    cssOutput += ".card a {text-decoration: none;}"
    writeToFile("./dist/style.css", cssOutput);
}

//This function returns the first "half" of an html page, ending the body tag
function getHTMLBeginning() {
    let output = "";
    output += '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
    output += '<title>My team</title>';
    output += '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">';
    output += '<link rel="stylesheet" href="style.css">';
    output += "</head><body>";
    return output;
}

//This function returns the second "half of an html page, starting at the closing body tag"
function getHTMLEnding() {
    let output = "";
    output += '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>';
    output += '</body></html>';
    return output;
}

//This function returns a bootstrap card for each employee
function generateCards() {
    let cards = "";
    for (const i of empArray) {
        cards += '<div class="col-xl-4 col-lg-6 col-12 mb-5">';
        cards += '<div class="card shadow h-100 m-5" style="width: 24rem;">';
        cards += '<div class="card-header bg-info text-white text-center">';
        cards += `<h5>${i.getName()}</h5>`;
        cards += `<h5>${i.getRole()}     <img src="${i.getImage()}" alt="Employee Image"></h5>`;
        cards += "</div>";
        cards += '<ol class="list-group list-group-flush">';
        cards += `<li class="list-group-item"><h6>ID: ${i.getId()}</h6></li>`;
        cards += `<li class="list-group-item"><h6>Email: <a href="mailto:${i.getEmail()}">${i.getEmail()}</a></h6></li>`;
        cards += `<li class="list-group-item"><h6>${getSpecifics(i)}</h6></li>`;
        cards += "</ol></div></div>";
    }
    return cards;
}

//This function checks what kind of employee they are before returning their role specific data
function getSpecifics(emp) {
    if (emp.getRole() === "Manager") {
        return `Office#: ${emp.getOfficeNumber()}`;
    }
    else if (emp.getRole() === "Engineer") {
        return `Github: <a href="https://www.github.com/${emp.getGithub()}">${emp.getGithub()}</a>`;
    }
    else {
        return `School: ${emp.getSchool()}`;
    }
}

//This function writes data to filename
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
        error ? console.error(error) : console.log(`Writing to ${fileName} was successful!`)
    );
}

init();