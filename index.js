

const inquirer = require('inquirer');
const writeFile = require('fs');
const Employee = require('./lib/employee.js');
const path = require('path');
const Engineer = require('./lib/engineer.js');
const Intern   = require('./lib/intern.js');
const Manager  = require('./lib/manager.js');

const generateReport = require('./lib/generateReport.js');

//Copied lines 22 to 179 into a file called questions.js, and then const Questions = require('./lib/questions.js')
 
// 1.  Start with creating a Team Manger
// 2.  At the end of Team Manager, then present with menu questions of Do you want to create an Engineer or an Intern. 
// 4.  If you want to creat an Intern
// 5.  Call create Intern function to ask intern questions 
// 6.  At the end of create Intern go back to menu function
// 7.  If you want to create an Engineer then call create Engineer function

const employees = [];

const checkEmployeeInput = (value) => {
    if (value != '') {
        if (value.length < 2) {
            console.log(`\nName must be more than one character`);
            return false;
        } else {
            return true;
        }
    } else {
        console.log(`\nEnter text for a name`);
        return false;
    }
}

const checkIdInput = (value) => {
    if (value != '') {
        if (isNaN(value)) {
            console.log(`\nID must be a number`);
        } else {
            return true;
        }
    } else {
        console.log(`\nEnter an ID`);
        return false;
    }
}

const checkEmailInput = (value) => {
    if (value != '') {
        if (!value.includes('@')) {
            console.log(`\nA valid email contains an "@", enter a valid email address`);
        } else {
            return true;
        }
    } else {
        console.log(`\nEnter an email address`);
        return false;
    }
}

const checkOfficeNumber = (value) => {
    if (value != '') {
        if (isNaN(value)) {
            console.log(`\nOffice number must be a number`);
        } else {
            return true;
        }
    } else {
        console.log(`\nOffice number cannot be null, enter an office number`);
        return false;
    }
}
const checkSchoolInput = (value) => {
    if (value != '') {
        return true;
    } else {
        console.log(`\nSome text must be entered, please enter a School Name`);
        return false;
    }
}

const checkGitHubInput = (value) => {
    if (value != '') {
        return true;
    } else {
        console.log(`\nSome text must be entered, please enter a GITHUB Name`);
        return false;
    }
}

const employeeQuestions = [

    {
        type: "input",
        message: "Enter an ID number",
        name: "employeeID",
        validate: checkIdInput,
    },
    {
        type: "input",
        message: "Enter their Email address",
        name: "employeeEmail",
        validate: checkEmailInput,
    },
]

const internTitleQuestion = [
    {
        type: "input",
        message: "Enter Intern's name",
        name: "employeeName",
        validate: checkEmployeeInput,
    },
]
const internQuestions = [
    {
        type: "input",
        message: "Enter name of the School",
        name: "school",
        validate: checkSchoolInput,
    },
]

const managerTitleQuestion = [
    {
        type: "input",
        message: "Enter Manager's name",
        name: "employeeName",
        validate: checkEmployeeInput,
    },
]
const managerQuestions = [
    {
        type: "input",
        message: "Enter an Office Number for the Manager",
        name: "officeNumber",
        validate: checkOfficeNumber,
    },

]

const engineerTitleQuestion = [
    {
        type: "input",
        message: "Enter Engineer's name",
        name: "employeeName",
        validate: checkEmployeeInput,
    },
]

const engineerQuestions = [
    {
        type: "input",
        message: "Enter a GITHUB name",
        name: "GitHub",
        validate: checkGitHubInput,
    },

]


const mainMenuQuestions = [
    {
        type: "list",
        message: "Do you want to enter details for the following or Exit?",
        name: "mainMenuSelection",
        choices: ["Manager", "Intern", "Engineer", "Exit"]
    },
]
const menuQuestions = [
    {
        type: "list",
        message: "Do you want to enter details for the following, or Exit?",
        name: "menuSelection",
        choices: ["Intern", "Engineer", "Exit"]
    },
]

function mainMenu() {
    console.log('Inside Main Menu');
    const questions = mainMenuQuestions;
    inquirer.prompt(questions).then((answers) => {

        if (answers.mainMenuSelection === 'Manager') {
            createManager();
        } else if (answers.mainMenuSelection === 'Engineer') {
            createEngineer();
        } else if (answers.mainMenuSelection === 'Intern') {
            createIntern();
        } else {
            //goto generateReport
            const reportEmployees = generateReport(employees);
            writeFile.writeFileSync(path.join(__dirname, 'dist', 'report.html'), reportEmployees, 'utf-8');
        }
    })
}

function createEngineer() {
    console.log('Inside Engineer');
     
    const questions = engineerTitleQuestion.concat(employeeQuestions).concat(engineerQuestions).concat(menuQuestions);
    inquirer.prompt(questions).then((answers) => {
        const engineer = new Engineer(answers.employeeName, answers.employeeID, answers.employeeEmail, answers.GitHub);
        employees.push(engineer);
        if (answers.menuSelection === 'Intern') {
            createIntern();
        } else if (answers.menuSelection === 'Engineer') {
            createEngineer();
        } else {
            mainMenu();
        }

    })
}

function createIntern() {
    console.log('Inside intern');
    const questions = internTitleQuestion.concat(employeeQuestions).concat(internQuestions).concat(menuQuestions);
    inquirer.prompt(questions).then((answers) => {
        const intern = new Intern(answers.employeeName, answers.employeeID, answers.employeeEmail, answers.school);
        employees.push(intern);
        if (answers.menuSelection === 'Intern') {
            createIntern();
        } else if (answers.menuSelection === 'Engineer') {
            createEngineer();
        } else {
            mainMenu();
        }
    })
}

function createManager() {
    console.log('Inside manager');
    const questions = managerTitleQuestion.concat(employeeQuestions).concat(managerQuestions).concat(menuQuestions);
    inquirer.prompt(questions).then((answers) => {
        const manager = new Manager(answers.employeeName, answers.employeeID, answers.employeeEmail, answers.officeNumber);
        employees.push(manager);
        if (answers.menuSelection === 'Intern') {
            createIntern();
        } else if (answers.menuSelection === 'Engineer') {
            createEngineer();
        } else  {
            mainMenu();
        }

    })
}

createManager();