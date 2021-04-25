// Function returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "None"){
    return ''
  }
  return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// Function returns the license link in the table of contents
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "None"){
    return ''
  }
  return `* [License](#license)`
}

// Function returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "None"){
    return ''
  }
  return `## License`
}

// Function generates markdown for README
function generateMarkdown(data) {
  return `# Project Title: ${data.title} 

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ${renderLicenseLink(data.license)}
  
  
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
  [${data.github}(https://www.github.com/${data.github}/) 
  
 
  
  Or for direct enquiries please email the follower developer address: 
  ${data.email} 
  
  
 ${renderLicenseSection(data.license)}
  
  ${data.license} 

`;
}

module.exports = generateMarkdown;
