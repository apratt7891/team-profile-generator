const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require ('.src/generatePage');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const myTeamArray = [];

const teamManger = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter Manager's name (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your Manager's name");
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'employee id',
            message: "Enter the manager's employee ID",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's employee ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the Manager's email address.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's email address");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number",
            validate: officeNumberInput => {
                if(officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's office number");
                    return false;
                }
            }
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        myTeamArray.push(manager);
        console.log(manager);
    })
};

const teamEmployee = ()=> {
    console.log (`
    =============
    Add Employees to the team
    =============
    `);
    return inquirer.prompt ([
        {
            type: 'input',
            name: 
        }
    ])
}






























fs.writeFile('index.html', generatePage(gname, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });



  