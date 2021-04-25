// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title: ${data.title} 


  ## Table of Contents
  
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)
  [Licence](#licence)
  
  
  ## Description 
  
  A brief description of the project is as follows: 
  
  ${data.description} 
  
  ## Installation
  
  To install the project please use the following package manager: 
  
  ${data.installation} 
  
  ## Usage
  
  Examples of Usage are as follows:
  
  ${data.usage} 
  
  ## Contributing
  
  To contribute further on this project please:
  
  ${data.contributing} 
  
  ## Tests
  
  Please update tests as follows: 
  
  ${data.tests} 
  
  ## Questions
  
  For any further questions, please contact GitHub user: 
  ${data.questions-github} 
  
  GitHub Profile: 
  ${data.questions-github-address} 
  
  Or for direct enquiries please email the follower developer address: 
  ${data.questions-email} 
  
  
  ## Licence
  
  ${data.licence} 

`;
}

module.exports = generateMarkdown;
