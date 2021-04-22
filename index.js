// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = () => {
 return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project:',
    },
    {
        type: 'input',
        name: 'table',
        message: 'Table of Contents:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can other developers contribute to the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can others test this project?',
    },
    {
        type: 'input',
        name: 'questions-github',
        message: 'Please enter your GitHub Username:',
    },
    {
        type: 'input',
        name: 'questions-github-address',
        message: 'Please enter your GitHub Address:',
    },
    {
        type: 'input',
        name: 'questions-email',
        message: 'Please enter your email address:',
    },
    // Add list of options for licence with a badge
    {
        type: 'input',
        name: 'licence',
        message: 'Please select a correct licence for your project:',
    },
])
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
