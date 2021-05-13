
const Manager = require("../lib/manager.js");

describe(`manager`, () => {
    describe(`manager name`, () => {
        it("throws an error when it receives an empty string for name", () => {
            expect(() => { new Manager(' ') }).toThrow('Enter text for a name')
        });
        it("throws an error when it receives a name that has a length of one for name", () => {
            expect(() => { new Manager('x') }).toThrow('Name must be more than one character')
        });
    });
    describe(`manager id`, () => {
        it("throws an error when it receives an empty string for ID", () => {
            expect(() => { new Manager('Sue', ' ') }).toThrow('Enter an ID')
        });
        it("throws an error when the ID is not a number", () => {
            expect(() => { new Manager('Sue', 'xs') }).toThrow('ID must be a number')
        });
    })
    describe(`manager email`, () => {
        it("throws an error when it receives an empty string for email", () => {
            expect(() => { new Manager('Sue', '12', ' ') }).toThrow('Enter an email address')
        });
        it("throws an error when it receives an string without an @ in the email address", () => {
            expect(() => { new Manager('Sue', '12', 'suegmail.com') }).toThrow('A valid email contains an "@", enter a valid email address')
        });
    });
    describe(`manager office number`, () => {
        it("throws an error when it receives an empty string for office number", () => {
            expect(() => { new Manager('Sue', '12', 'xkqk2010@gmail.com',' ') }).toThrow('Office number cannot be null, enter an office number')
        });
        it("throws an error when the office number is not a number", () => {
            expect(() => { new Manager('Sue', '12', 'xkqk2010@gmail.com','x1') }).toThrow('Office number must be a number')
        });
    });
    describe(`manager functions`, () => {
        it("throws an error if getName returns no name for the object that invoked it", () => {
            const sue = new Manager('Susanne', '1234', 'xkqk2010@gmail.com','12');
            expect(sue.getName()).toEqual('Susanne');
        });
        it("throws an error if getId returns no ID for the object that invoked it", () => {
            const sue = new Manager('Susanne', '1234', 'xkqk2010@gmail.com','12');
            expect(sue.getID()).toEqual('1234');
        });
        it("throws an error if getEmail returns no email address for the object that invoked it", () => {
            const sue = new Manager('Susanne', '1234', 'xkqk2010@gmail.com','12');
            expect(sue.getEmail()).toEqual('xkqk2010@gmail.com');
        });
        it("throws an error if getRole does not return Manager for the object that invoked it", () => {
            const sue = new Manager('Susanne', '1234', 'xkqk2010@gmail.com','12');
            expect(sue.getRole()).toEqual('Manager');

        })
    })
    
})
 