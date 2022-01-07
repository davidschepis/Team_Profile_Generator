const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("instantiation", () => {
        it("should create an object", () => {
            const test = new Intern("", "", "", "");
            expect(test instanceof Intern).toEqual(true);
        });
    });
    describe("get role", () => {
        it("should return Intern", () => {
            const test = new Intern("", "", "", "");
            expect(test.getRole()).toEqual("Intern");
        });
    });
    describe("get name", () => {
        it("should return their name", () => {
            const test = new Intern("Chabs", "", "", "");
            expect(test.getName()).toEqual("Chabs");
        });
    });
    describe("get id", () => {
        it("should return their id", () => {
            const test = new Intern("", "666", "", "");
            expect(test.getId()).toEqual("666");
        });
    });
    describe("get email", () => {
        it("should return their email", () => {
            const test = new Intern("", "", "chabs@gmail.com", "");
            expect(test.getEmail()).toEqual("chabs@gmail.com");
        });
    });
    describe("get school", () => {
        it("should return their school", () => {
            const test = new Intern("", "", "", "Princeton");
            expect(test.getSchool()).toEqual("Princeton");
        });
    });
});