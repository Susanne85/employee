
const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

        if (this.officeNumber === undefined) {
            throw 'No office number input';
        } else if (this.officeNumber === ' ') {
            throw 'Enter an office number'
        } else if (isNaN(this.officeNumber)) {
            throw 'Office number must be a number'
        }

        this.constructor = 'Manager';

    }
}
module.exports = Manager;
