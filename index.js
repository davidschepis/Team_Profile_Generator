//globals
const Employee = require("./lib/Employee");
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
            generateHTML();
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
            generateHTML();
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
            generateHTML();
        }
    }).catch((error) => {
        console.log(error);
    });
}

//This function generates the HTML file
function generateHTML() {
    
}











init();