

const Employee = require("../lib/employee.js");

describe(`employee`, () => {
    describe(`employee name`, () => {
        it("throws an error when it receives an empty string for name", () => {
            expect(() => { new Employee(' ') }).toThrow('Enter text for a name')
        });
        it("throws an error when it receives a name that has a length of one for name", () => {
            expect(() => { new Employee('x') }).toThrow('Name must be more than one character')
        });
    })
    describe(`employee id`, () => {
        it("throws an error when it receives an empty string for ID", () => {
            expect(() => { new Employee('Sue', ' ') }).toThrow('Enter an ID')
        });
        it("throws an error when the ID is not a number", () => {
            expect(() => { new Employee('Sue', 'xs') }).toThrow('ID must be a number')
        });
    })
    describe(`employee email`, () => {
        it("throws an error when it receives an empty string for email", () => {
            expect(() => { new Employee('Sue', '12', ' ') }).toThrow('Enter an email address')
        });
        it("throws an error when it receives an string without an @ in the email address", () => {
            expect(() => { new Employee('Sue', '12', 'suegmail.com') }).toThrow('A valid email contains an "@", enter a valid email address')
        });
    })
    describe(`employee functions`, () => { 
        it("throws an error if getName returns no name for the object that invoked it",() => {
            const sue = new Employee('Susanne', '1234', 'xkqk2010@gmail.com');
            expect(sue.getName()).toEqual('Susanne');
        });
        it("throws an error if getId returns no ID for the object that invoked it",() => {
            const sue = new Employee('Susanne', '1234', 'xkqk2010@gmail.com');
            expect(sue.getID()).toEqual('1234');
        });
        it("throws an error if getEmail returns no email address for the object that invoked it",() => {
            const sue = new Employee('Susanne', '1234', 'xkqk2010@gmail.com');
            expect(sue.getEmail()).toEqual('xkqk2010@gmail.com');
        });
        it("throws an error if getRole does not return Employee for the object that invoked it",() => {
            const sue = new Employee('Susanne', '1234', 'xkqk2010@gmail.com');
            expect(sue.getRole()).toEqual('Employee');
        });
    })
})