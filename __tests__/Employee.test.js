
//const add = require('../employee');

const Employee = require("../employee");

describe(`employee`, () => {
    it('throws an error when it creates a null Employee', () => {
        expect(() => {new Employee()}).toThrow(' ');
    });
    it('throws an error when it receives null Employee name', () => {
        expect(() => {new Employee(' ',)}).toThrow(' ');
    });
    it('throws an error when it receives null Employee ID', () => {
        expect(() => {new Employee('Sue',' ',)}).toThrow(' ');
    });
})


