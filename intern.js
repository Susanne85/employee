

const Employee = require('./employee');

class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name,id,email);
        this.school = school;

        if (this.school === ' ') {
            throw 'Enter a School Name';
        }

        this.constructor = 'Intern';
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern;
