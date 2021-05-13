

const Employee = require('./employee');

class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name,id,email);
        this.school = school;

        if (this.school === ' ') {
            throw 'Some text must be entered, please enter a School Name';
        }

        this.constructor = 'Intern';
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern;
