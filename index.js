// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['Provide a title for your project', 'What was your motivation?', 'Why did you build this project?', 'What problem does it solve?', 'What did you learn?', 'What are the steps required to install your project?', 'Provide instructions and examples for use.', 'Choose a license.'];

const getAnswer = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: questions[0],
      },
    {
      type: 'input',
      name: 'motivation',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'why',
      message: questions[2],
    },
    {
      type: 'input',
      name: 'problem',
      message: questions[3],
    },
    {
      type: 'input',
      name: 'learning',
      message: questions[4],
    },
    {
      type: 'input',
      name: 'steps',
      message: questions[5],
    },
    {
      type: 'input',
      name: 'instructions',
      message: questions[6],
    },
    {
        type: 'list',
        name: 'license',
        message: questions[7],
        choices: ["Apache", "IBM", "MIT", "Mozilla", "Unlicense", "None"]
      },
  ])}; 


// TODO: Create a function to write README file
function writeToFile(filename, data) {
  getAnswer()
  .then((data) => fs.writeFile(filename, generateMarkdown(data), (err) => {
    err ? console.error(err) : console.log('Success!')}
  ));
};

// writeToFile("readme.html", data);

// TODO: Create a function to initialize app
function init() {
    writeToFile('README.md', generateMarkdown(data))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
