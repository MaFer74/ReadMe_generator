const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your project about?',
      },
      {
        type: 'input',
        name: 'installations',
        message: 'What instalations instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the purpose of this app?',
      },
      {
        type: 'input',
        name: 'license',
        message: 'list the licenses used in this repo',
      },
      {
        type: 'input',
        name: 'contribuition',
        message: 'How did you contribute to this repo',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'test instructions',
      },
      {
        type: 'input',
        name: 'questions_github',
        message: 'what si your github username?',
      },
      {
        type: 'input',
        name: 'questions_email',
        message: 'what is your email addres?',
      },


];

// function to write README file
function writeToFile(fileName, data) {
 fs.writeFile(fileName, data, (err) =>
err ? console.error(err) : console.log('Success!')
);   
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then(answers =>{
    console.log(answers);
writeToFile("ReadMe.md", generateMarkdown(answers))    
}) 
}

// function call to initialize program
init();