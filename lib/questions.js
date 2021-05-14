
const checkEmployeeInput = (value) => {
    if (value === ''){
        console.log(`\nEnter text for a name`);
        return false;
    }

    if (value.length < 2) {
        console.log(`\nName must be more than one character`);
        return false;
    }
    return true;
}

const checkIdInput = (value) => {
    if(value === '') {
        console.log(`\nEnter an ID`);
        return false;
    }

    if (isNaN(value)) {
        console.log(`\nID must be a number`);
        return false;
    }
    return true;
}

const checkEmailInput = (value) => {
    if(value === ''){
        console.log(`\nEnter an email address`);
        return false;
    }

    if (!value.includes('@')) {
        console.log(`\nA valid email contains an "@", enter a valid email address`);
        return false;
    }
    return true;
}

const checkOfficeNumber = (value) => {
    if(value ===''){
        console.log(`\nOffice number cannot be null, enter an office number`);
        return false;
    }

    if (isNaN(value)) {
        console.log(`\nOffice number must be a number`);
        return false;
    }  
    return true;
}

const checkSchoolInput = (value) => {
    if (value ===''){
        console.log(`\nSome text must be entered, please enter a School Name`);
        return false;
    }
    
    return true;
}

const checkGitHubInput = (value) => {
    if (value === '') {
        console.log(`\nSome text must be entered, please enter a GITHUB Name`);
        return false;
    }
    return true;
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

// When exporting you are exporting an object what ever you put after the "=" sign

module.exports = {
    employeeQuestions: employeeQuestions,
    internTitleQuestion: internTitleQuestion,
    internQuestions: internQuestions,
    managerTitleQuestion: managerTitleQuestion,
    managerQuestions: managerQuestions,
    engineerTitleQuestion: engineerTitleQuestion,
    engineerQuestions: engineerQuestions,
    mainMenuQuestions: mainMenuQuestions,
    menuQuestions: menuQuestions,
}