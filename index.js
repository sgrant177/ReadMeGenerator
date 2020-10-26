const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a short description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide insturctions and examples for usage."
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators with links to their github profiles. If you used any third-party assets that require atrribtuons, list their creators here. List any tutorials you used as well."
    },
    {
        type: "input",
        name: "contributing",
        message: "Add guidelines on how other developers can contribute to your project. (https://www.contributor-covenant.org/) Is an industry standard. "
    },
    {
        type: "input",
        name: "license",
        message: "select a license at (https://choosealicense.com/) and copy here."
    },
    {
        type: "input",
        name: "badges",
        message: "insert badge URL here"
    },
    {
        type: "input",
        name: "tests",
        message: "If you have any tests for your application, provide them here."
    }
]).then(answers => {
    const { title, description, installation, usage, credits, contributing, license, badges, tests } = answers;


const README = 

`# ${title}

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
${license}

## Badges
${badges}

## Contributing
${contributing}

## Tests 
${tests}`

fs.writeFile("README.md", README, err => {
    if(err){
        console.log(err);
    }else{
        console.log("Success!");
    }
})
})
