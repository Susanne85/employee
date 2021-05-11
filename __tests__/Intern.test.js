
const Intern = require("../intern.js");

describe(`intern name`, () => {
    it("throws an error when it receives an empty string for name", () => {
        expect(() => { new Intern(' ') }).toThrow('Enter a name')
    });
    it("throws an error when it receives a name that has a length of one for name", () => {
        expect(() => { new Intern('x') }).toThrow('Name must be more than one character')
    });
});
describe(`intern id`, () => {
    it("throws an error when it receives an empty string for ID", () => {
        expect(() => { new Intern('Sue', ' ') }).toThrow('Enter an ID')
    });
    it("throws an error when the ID is not a number", () => {
        expect(() => { new Intern('Sue', 'xs') }).toThrow('ID must be a number')
    });
})
describe(`intern email`, () => {
    it("throws an error when it receives an empty string for email", () => {
        expect(() => { new Intern('Sue', '12', ' ') }).toThrow('Enter an email address')
    });
    it("throws an error when it receives an string without an @ in the email address", () => {
        expect(() => { new Intern('Sue', '12', 'suegmail.com') }).toThrow('Enter a valid email address')
    });
});
describe(`intern school`, () => {
    it("throws an error when it receives an empty string for School name", () => {
        expect(() => { new Intern('Sue', '12', 'xkqk2010@gmail.com', ' ') }).toThrow('Enter a School Name')
    });
});
describe(`manager functions`, () => {
    it("throws an error if getName returns no name for the object that invoked it", () => {
        const sue = new Intern('Susanne', '1234', 'xkqk2010@gmail.com', 'KDHS');
        expect(sue.getName()).toEqual('Susanne');
    });
    it("throws an error if getId returns no ID for the object that invoked it", () => {
        const sue = new Intern('Susanne', '1234', 'xkqk2010@gmail.com', 'KDHS');
        expect(sue.getID()).toEqual('1234');
    });
    it("throws an error if getEmail returns no email address for the object that invoked it", () => {
        const sue = new Intern('Susanne', '1234', 'xkqk2010@gmail.com', 'KDHS');
        expect(sue.getEmail()).toEqual('xkqk2010@gmail.com');
    });
    it("throws an error if getRole does not return Intern for the object that invoked it", () => {
        const sue = new Intern('Susanne', '1234', 'xkqk2010@gmail.com', 'KDHS');
        expect(sue.getRole()).toEqual('Intern');
    })
    it("throws an error if getSchool does not return the School Name for object that invoked it", () => {
        const sue = new Intern('Susanne', '1234', 'xkqk2010@gmail.com', 'KDHS');
        expect(sue.getSchool()).toEqual('KDHS');
    })
})

 