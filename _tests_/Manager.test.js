const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("manager instantiation", () => {
        it("should create a manager object", () => {
            const test = new Manager("", "", "", "");
            expect(test instanceof Manager).toEqual(true);
        });
    });
    describe("get role", () => {
        it("should return Manager", () => {
            const test = new Manager("", "", "", "");
            expect(test.getRole()).toEqual("Manager");
        });
    });
    describe("get name", () => {
        it("should return the manager's name", () => {
            const test = new Manager("Chabs", "", "", "");
            expect(test.getName()).toEqual("Chabs");
        });
    });
    describe("get id", () => {
        it("should return the manager' id", () => {
            const test = new Manager("", "666", "", "");
            expect(test.getId()).toEqual("666");
        });
    });
    describe("get email", () => {
        it("should return the manager' email", () => {
            const test = new Manager("", "", "chabs@gmail.com", "");
            expect(test.getEmail()).toEqual("chabs@gmail.com");
        });
    });
    describe("get office number", () => {
        it("should return the manager' office number", () => {
            const test = new Manager("", "", "", "666");
            expect(test.getOfficeNumber()).toEqual("666");
        });
    });
    describe("get all fields from a manager", () => {
        it("should return all fields of a manager", () => {
            const test = new Manager("David Schepis", "666", "chabs@gmail.com", "5C");
            const testArray = [test.getName(), test.getId(), test.getEmail(), test.getOfficeNumber(), test.getRole()];
            expect(testArray).toEqual(["David Schepis", "666", "chabs@gmail.com", "5C", "Manager"]);
        });
    });
    describe("get manager image", () => {
        it("should return the correct link to the manager's image", () => {
            const test = new Manager("", "", "", "");
            expect(test.getImage()).toEqual("../assets/images/coffee.svg");
        });
    });
});