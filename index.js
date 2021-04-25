// TODO: Include packages needed for this application

const inquirer = require('./node_modules/inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');



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
        message: 'Please select a correct licence for your project:',
        name: 'licence',
        choices: ['Licence1', 'Licence2', 'Licence3'],
    },
])
}




// TODO: Create a function to write README file
const writeToFile = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
const init = () => {
    questions() 
    .then((data) => writeToFile('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully written to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();



///////////////////////////

// PSEUDOCODE // TO DO LIST

// add functions in utils: generateMarkdown.js file
// Add Badges and licence options to README ${} - how??
// Updated licence options in array above
// insert answers into output:READMETEST.md content
// Video Walkthrough + Screenshots
// How should it look I submit - should I delete files?