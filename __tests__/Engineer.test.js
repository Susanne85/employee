

const Engineer = require("../engineer.js");

describe(`engineer`, () => {
    describe(`engineer name`, () => {
        it("throws an error when it receives an empty string for name", () => {
            expect(() => { new Engineer(' ') }).toThrow('Enter a name')
        });
        it("throws an error when it receives a name that has a length of one for name", () => {
            expect(() => { new Engineer('x') }).toThrow('Name must be more than one character')
        });
    });
    describe(`engineer id`, () => {
        it("throws an error when it receives an empty string for ID", () => {
            expect(() => { new Engineer('Sue', ' ') }).toThrow('Enter an ID')
        });
        it("throws an error when the ID is not a number", () => {
            expect(() => { new Engineer('Sue', 'xs') }).toThrow('ID must be a number')
        });
    })
    describe(`engineer email`, () => {
        it("throws an error when it receives an empty string for email", () => {
            expect(() => { new Engineer('Sue', '12', ' ') }).toThrow('Enter an email address')
        });
        it("throws an error when it receives an string without an @ in the email address", () => {
            expect(() => { new Engineer('Sue', '12', 'suegmail.com') }).toThrow('Enter a valid email address')
        });
    });
    describe(`engineer github`, () => {
        it("throws an error when it receives an empty string for GitHub name", () => {
             expect(() => { new Engineer('Sue', '12', 'xkqk2010@gmail.com', ' ') }).toThrow('Enter a GitHub name')
        });
    });
    describe(`manager functions`, () => {
        it("throws an error if getName returns no name for the object that invoked it", () => {
            const sue = new Engineer('Susanne', '1234', 'xkqk2010@gmail.com', 'Susanne85');
            expect(sue.getName()).toEqual('Susanne');
        });
        it("throws an error if getId returns no ID for the object that invoked it", () => {
            const sue = new Engineer('Susanne', '1234', 'xkqk2010@gmail.com', 'Susanne85');
            expect(sue.getID()).toEqual('1234');
        });
        it("throws an error if getEmail returns no email address for the object that invoked it", () => {
            const sue = new Engineer('Susanne', '1234', 'xkqk2010@gmail.com', 'Susanne85');
            expect(sue.getEmail()).toEqual('xkqk2010@gmail.com');
        });
        it("throws an error if getRole does not return Engineer for the object that invoked it", () => {
            const sue = new Engineer('Susanne', '1234', 'xkqk2010@gmail.com', 'Susanne85');
            expect(sue.getRole()).toEqual('Engineer');
        })
        it("throws an error if getGitHub does not return the GitHub name for object that invoked it", () => {
            const sue = new Engineer('Susanne', '1234', 'xkqk2010@gmail.com', 'Susanne85');
            expect(sue.getGitHub()).toEqual('Susanne85');
        })
    })

})