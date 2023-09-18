// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://choosealicense.com/licenses/mit/`
  }
  if (license === 'GPL') {
    return `https://choosealicense.com/licenses/gpl-3.0/`
  }
  if (license === 'ISC') {
    return `https://opensource.org/license/isc-license-txt/`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is covered using the ${license} license. To learn more, click the license badge above.`
  } else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.licenses)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Credits](#credits)
  * [License](#licenses)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installaion}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Credits
  ${data.name}

  ## License
  ${renderLicenseSection(data.licenses)}

`;
}

module.exports = generateMarkdown;
