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
        name: 'installation',
        message: 'Enter installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['none','MIT License', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3','Mozilla Public License 2.0', 'Apache License 2.0']

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
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email for questions:'
    },
    {
        type: 'input',
        name: 'githubLink',
        message: 'Enter link to Git Hub:'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Enter contact instructions:'
    }
];

const promptUser = () => {
    return inquirer.prompt(questions);
}

/*  PROMPT USER 
promptUser()  
    .then(userData => {
        console.log(userData);
        return generateTemplate(userData);
    })
    .then(template => {
        return writeMarkdown(template);
    })
    .then(writeMarkdownResponse => {
        console.log(writeMarkdownResponse);
    });
   */ 

/* TEST DATA */

testData = {
    title: 'My Title',
    description: 'My Description',
    installation: 'My Installation',
    usage: 'My Usage',
    license: 'MIT License',
    contribution: 'My contribution',
    tests: 'My tests',
    email: 'my email',
    githubLink: 'my git link',
    instructions: 'my instructions'
};
var template = generateTemplate(testData);
writeMarkdown(template)
    .then(writeMarkdownResponse => {
        console.log(writeMarkdownResponse);
    });



