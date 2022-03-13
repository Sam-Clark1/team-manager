var inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./Engineer');
// const generatePage = require('index.html'); //what file to assign here?

const questions = [
    {
      type: 'list',
      name: 'employeeType',
      message: 'What employee do you want add?',
      choices: ['Manager', 'Engineer', 'Employee', 'Intern'],
    },
  ];

function writeToFile(fileName, data) {
    // const pageHTML = generatePage(data);
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${JSON.stringify(data)}
    </body>
    </html>`
    
    fs.writeFile(fileName, html, err => {
        if (err) throw err;
        console.log(err);
        console.log('Page complete! Check out index.html to see the output!');
    });
}

function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        console.log('answers????:', answers)
        if (answers.employeeType === 'Engineer') {
            const engineer = new Engineer('Noah', '1', 'noah@gmail.com', 'noahking27', 'Engineer')
            console.log('engineer?????', engineer)
            writeToFile('index.html', engineer)
        } else if(answers.employeeType === 'Manager') {

        }
        // writeToFile('index.html', answers)
      })
      .catch((error) => {
        console.log(error)
      });
  }
  
  init();
  