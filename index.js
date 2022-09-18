// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateTemplate = require('./src/page-template.js');
const writeMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter description:'
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Enter a table of contents:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter license information:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:'
    }
];

const promptUser = () => {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

promptUser()  
    .then(userData => {
        return generateTemplate(userData);
    })
    .then(template => {
        return writeMarkdown(template);
    });
