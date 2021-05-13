

const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name,id,email,gitHub) {
        super(name,id,email);
        this.gitHub = gitHub;
        if (this.gitHub === ' ') {
            throw 'Some text must be entered, please enter a GITHUB Nam';
        }
        this.constructor = 'Engineer';
    }

    getGitHub(){
        return this.gitHub;
    }
}

module.exports = Engineer;
