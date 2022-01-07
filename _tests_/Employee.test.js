const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("instantiation", () => {
        it("should create an object", () => {
            const test = new Employee("", "", "", "");
            expect(test instanceof Employee).toEqual(true);
        });
    });
    describe("get role", () => {
        it("should return Employee", () => {
            const test = new Employee("", "", "", "");
            expect(test.getRole()).toEqual("Employee");
        });
    });
    describe("get name", () => {
        it("should return their name", () => {
            const test = new Employee("Chabs", "", "", "");
            expect(test.getName()).toEqual("Chabs");
        });
    });
    describe("get id", () => {
        it("should return their id", () => {
            const test = new Employee("", "666", "", "");
            expect(test.getId()).toEqual("666");
        });
    });
    describe("get email", () => {
        it("should return their email", () => {
            const test = new Employee("", "", "chabs@gmail.com", "");
            expect(test.getEmail()).toEqual("chabs@gmail.com");
        });
    });
});