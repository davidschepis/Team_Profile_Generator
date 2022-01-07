const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("instantiation", () => {
        it("should create an object", () => {
            const test = new Engineer("", "", "", "");
            expect(test instanceof Engineer).toEqual(true);
        });
    });
    describe("get role", () => {
        it("should return engineer", () => {
            const test = new Engineer("", "", "", "");
            expect(test.getRole()).toEqual("Engineer");
        });
    });
    describe("get name", () => {
        it("should return their name", () => {
            const test = new Engineer("Chabs", "", "", "");
            expect(test.getName()).toEqual("Chabs");
        });
    });
    describe("get id", () => {
        it("should return their id", () => {
            const test = new Engineer("", "666", "", "");
            expect(test.getId()).toEqual("666");
        });
    });
    describe("get email", () => {
        it("should return their email", () => {
            const test = new Engineer("", "", "chabs@gmail.com", "");
            expect(test.getEmail()).toEqual("chabs@gmail.com");
        });
    });
    describe("get github", () => {
        it("should return their github username", () => {
            const test = new Engineer("", "", "", "chabusername");
            expect(test.getGithub()).toEqual("chabusername");
        });
    });
});