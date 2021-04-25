// packages needed for this application

const inquirer = require('./node_modules/inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');



// Creates array of questions for user input
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
        name: 'github',
        message: 'Please enter your GitHub Username:',
    },
   
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
    },
    {
        type: 'list',
        message: 'Please select a correct license for your project:',
        name: 'license',
        choices: ['None', 'MIT', 'Apache-2.0'],
    },
])
}

// writes README file
const writeToFile = util.promisify(fs.writeFile);

// Function initializes app
const init = () => {
    questions() 
    .then((data) => writeToFile('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully written to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();


