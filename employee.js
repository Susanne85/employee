
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        if (this.name === undefined) {
            throw 'No name input';
        } else if (this.name === ' ') {
            throw 'Enter a name';
        } else if (this.name.length < 2) {
            throw 'Name must be more than one character'
        }

        if (this.id === undefined) {
            throw 'No Id input';
        } else if (this.id === ' ') {
            throw 'Enter an ID';
        } else if (this.id.length < 2) {
            throw 'ID must be more than one character'
        } else if (isNaN(this.id)) {
            throw 'ID must be a number'
        }

        if (this.email === undefined) {
            throw 'No email address input';
        } else if (this.email === ' ') {
            throw 'Enter an email address';
        } else {
            let emailAddress = this.email;
            if (!emailAddress.includes('@')) {
                throw 'Enter a valid email address';
            }
        }
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
        return "Employee";
    }
}

module.exports = Employee;
