

const inquirer = require('inquirer');
const writeFile = require('fs');
const Employee = require('./lib/employee.js');
const path = require('path');
const Engineer = require('./lib/engineer.js');
const Intern   = require('./lib/intern.js');
const Manager  = require('./lib/manager.js');
const Questions  = require('./lib/questions.js');

const generateReport = require('./lib/generateReport.js');

const employees = [];

function mainMenu() {
    console.log('Inside Main Menu');
    const questions = Questions.mainMenuQuestions;
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
     
    const questions = Questions.engineerTitleQuestion.concat(Questions.employeeQuestions).concat(Questions.engineerQuestions).concat(Questions.menuQuestions);
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
    const questions = Questions.internTitleQuestion.concat(Questions.employeeQuestions).concat(Questions.internQuestions).concat(Questions.menuQuestions);
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
    const questions = Questions.managerTitleQuestion.concat(Questions.employeeQuestions).concat(Questions.managerQuestions).concat(Questions.menuQuestions);
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