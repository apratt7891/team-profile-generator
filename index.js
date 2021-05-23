const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require ('./src/generatePage');

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
            type: 'list',
            name: 'employee role',
            message: "Choose the employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter Employee's name (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Employee's name");
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'employee id',
            message: "Enter the Employee's ID",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the Employee's ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the Employee's email address.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the Employee's email address");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the Employee's GitHub Username",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                     console.log("Please enter the Employee's GitHub Username!");
                     return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the Intern's school name",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                     console.log("Please enter the Intern's school name!");
                     return false;
                }
            }

        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: "Are there more employee's to add to the team?",
            default: false
        }
    ])
    .then(teamData => {
        let {name, id, email, role, github, school, confirmAdd } = teamData;
        let employee;

        if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        } else if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        }

        myTeamArray.push(employee);

        if(confirmAdd) {
            return addNewEmployee(myTeamArray);
        } else {
            return myTeamArray;
        }
    })
};






const writeFile = generatePage => {
    fs.writeFile('./dist/index.html', generatePage, err => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('You have successfully created your Team Profile! Check out index.html to see the output!');
    }    
  })
};  

teamManger()
    .then(teamEmployee)
    .then(myTeamArray => {
        return generatePage(myTeamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
      })
    .catch(err => {
        console.log(err);
    });

  