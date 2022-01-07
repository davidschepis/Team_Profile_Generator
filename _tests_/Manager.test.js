const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("instantiation", () => {
        it("should create an object", () => {
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
        it("should return their name", () => {
            const test = new Manager("Chabs", "", "", "");
            expect(test.getName()).toEqual("Chabs");
        });
    });
    describe("get id", () => {
        it("should return their id", () => {
            const test = new Manager("", "666", "", "");
            expect(test.getId()).toEqual("666");
        });
    });
    describe("get email", () => {
        it("should return their email", () => {
            const test = new Manager("", "", "chabs@gmail.com", "");
            expect(test.getEmail()).toEqual("chabs@gmail.com");
        });
    });
    describe("get office number", () => {
        it("should return their office number", () => {
            const test = new Manager("", "", "", "666");
            expect(test.getOfficeNumber()).toEqual("666");
        });
    });
});