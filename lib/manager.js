
const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

        if (this.officeNumber === ' ') {
            throw 'Office number cannot be null, enter an office numberr'
        } else if (isNaN(this.officeNumber)) {
            throw 'Office number must be a number'
        }

        this.constructor = 'Manager';

    }
}
module.exports = Manager;
