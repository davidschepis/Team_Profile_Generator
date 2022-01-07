//globals
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Inquirer = require("inquirer");
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
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
}











init();