const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("employee instantiation", () => {
        it("should create an employee object", () => {
            const test = new Employee("", "", "");
            expect(test instanceof Employee).toEqual(true);
        });
    });
    describe("get role", () => {
        it("should return Employee", () => {
            const test = new Employee("", "", "");
            expect(test.getRole()).toEqual("Employee");
        });
    });
    describe("get name", () => {
        it("should return the employee's name", () => {
            const test = new Employee("Chabs", "", "");
            expect(test.getName()).toEqual("Chabs");
        });
    });
    describe("get id", () => {
        it("should return the employee's id", () => {
            const test = new Employee("", "666", "");
            expect(test.getId()).toEqual("666");
        });
    });
    describe("get email", () => {
        it("should return the employee's email", () => {
            const test = new Employee("", "", "chabs@gmail.com");
            expect(test.getEmail()).toEqual("chabs@gmail.com");
        });
    });
    describe("get all fields from an employee", () => {
        it("should return all fields of an employee", () => {
            const test = new Employee("David Schepis", "666", "chabs@gmail.com");
            const testArray = [test.getName(), test.getId(), test.getEmail(), test.getRole()];
            expect(testArray).toEqual(["David Schepis", "666", "chabs@gmail.com", "Employee"]);
        });
    });
});