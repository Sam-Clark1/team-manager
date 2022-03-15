const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatePage = require('./src/pageTemplate');

var employees = [];

const generateManager = () => {
  return inquirer.prompt([
    {
      type: 'text',
        name: 'name',
        message: "Please enter manager's name.",
        validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('Please enter a name.');
              return false;
          }
        }
    }, 
    {
      type: 'text',
        name: 'id',
        message: "Please enter manager's ID number.",
        validate: idInput => {
          if (!isNaN(idInput)) {
            return true;
          } else {
            console.log('Please enter a valid ID(erase current input).');
            return false;
          }
        }
    }, 
    {
      type: 'text',
        name: 'email',
        message: "Please enter manager's email.",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter an email.');
            return false;
          }
        }
    },
    {
      type: 'text',
        name: 'officeNumber',
        message: "Please enter manager's office number.",
        validate: officeInput => {
          if (!isNaN(officeInput)) {
            return true;
          } else {
            console.log('Please enter a valid office number.');
            return false;
          }
        }
    },
  ]).then(data => {
    const {name, id, email, officeNumber, } = data;
    employees.push(new Manager(name, id, email, officeNumber));
  });
};

const generateEmployees = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'What is the role of this employee?',
      choices: ['Engineer', 'Intern', 'Exit'],
    },
  ]).then(({role}) => {
    if(role === 'Engineer'){
      generateEngineer();
    } else if(role === 'Intern'){
      generateIntern();
    } else{
      createPage()
    };
  });  
};

const generateEngineer = () => {
  return inquirer.prompt([
    {
      type: 'text',
        name: 'name',
        message: "Please enter engineer's name.",
        validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('Please enter a name.');
              return false;
          }
        }
    }, 
    {
      type: 'text',
        name: 'id',
        message: "Please enter engineer's ID number.",
        validate: idInput => {
          if (!isNaN(idInput)) {
            return true;
          } else {
            console.log('Please enter a valid ID(erase current input).');
            return false;
          }
        }
    }, 
    {
      type: 'text',
        name: 'email',
        message: "Please enter engineer's email.",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter an email.');
            return false;
          }
        }
    },
    {
      type: 'text',
        name: 'github',
        message: "Please enter engineer's GitHub username.",
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter their GitHub username.');
            return false;
          }
        }
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Would you like to enter another employees info?',
      default: false
    }
  ]).then(data => {
    const {name, id, email, github, confirm} = data;
    employees.push(new Engineer(name, id, email, github));
    confirm ? generateEmployees() : createPage();
  });
};

const generateIntern = () => {
  return inquirer.prompt([
    {
      type: 'text',
        name: 'name',
        message: "Please enter intern's name.",
        validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('Please enter a name.');
              return false;
          }
        }
    }, 
    {
      type: 'text',
        name: 'id',
        message: "Please enter intern's ID number.",
        validate: idInput => {
          if (!isNaN(idInput)) {
            return true;
          } else {
            console.log('Please enter a valid ID(erase current input).');
            return false;
          }
        }
    }, 
    {
      type: 'text',
        name: 'email',
        message: "Please enter intern's email.",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter an email.');
            return false;
          }
        }
    },
    {
      type: 'text',
        name: 'school',
        message: "Please enter intern's school.",
        validate: schoolInput=> {
          if (schoolInput) {
            return true;
          } else {
            console.log('Please enter their school.');
            return false;
          }
        }
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Would you like to enter another employees info?',
      default: false
    }
  ]).then(data => {
    const {name, id, email, school, confirm} = data;
    employees.push(new Intern(name, id, email, school));
    confirm ? generateEmployees() : createPage();
  })
};

const createPage = () => {
writeFile(generatePage(employees));
};

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
    copyFile();
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'Stylesheet created!'
      });
    });
  });
};
generateManager()
.then(generateEmployees);