// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Enter your name',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address',
    },
    {
      type: 'input',
      name: 'title',
      message: 'Enter project title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter project description',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter contributers',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions',
      },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('README.md', generateMarkdown(answers))
    })
}

// Function call to initialize app
init();

