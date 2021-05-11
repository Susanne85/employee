
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
 
        if (this.name === ' ') {
            throw 'Enter a name';
        } else if (this.name.length < 2) {
            throw 'Name must be more than one character'
        }

        if (this.id === ' ') {
            throw 'Enter an ID';
        } else if (isNaN(this.id)) {
            throw 'ID must be a number'
        }

        if (this.email === ' ') {
            throw 'Enter an email address';
        } else {
            let emailAddress = this.email;
            if (!emailAddress.includes('@')) {
                throw 'Enter a valid email address';
            }
        }

        this.constructor = "Employee";
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole(){
        return this.constructor;
    }
}

module.exports = Employee;
