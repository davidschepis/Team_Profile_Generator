const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("engineer instantiation", () => {
        it("should create an engineer object", () => {
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
        it("should return the engineer's name", () => {
            const test = new Engineer("Chabs", "", "", "");
            expect(test.getName()).toEqual("Chabs");
        });
    });
    describe("get id", () => {
        it("should return the engineer's id", () => {
            const test = new Engineer("", "666", "", "");
            expect(test.getId()).toEqual("666");
        });
    });
    describe("get email", () => {
        it("should return the engineer's email", () => {
            const test = new Engineer("", "", "chabs@gmail.com", "");
            expect(test.getEmail()).toEqual("chabs@gmail.com");
        });
    });
    describe("get github", () => {
        it("should return the engineer's github username", () => {
            const test = new Engineer("", "", "", "chabusername");
            expect(test.getGithub()).toEqual("chabusername");
        });
    });
    describe("get all fields from an engineer", () => {
        it("should return all fields of an engineer", () => {
            const test = new Engineer("David Schepis", "666", "chabs@gmail.com", "davidschepisgithub");
            const testArray = [test.getName(), test.getId(), test.getEmail(), test.getGithub(), test.getRole()];
            expect(testArray).toEqual(["David Schepis", "666", "chabs@gmail.com", "davidschepisgithub", "Engineer"]);
        });
    });
    describe("get engineer image", () => {
        it("should return the correct link to the engineer's image", () => {
            const test = new Engineer("", "", "", "");
            expect(test.getImage()).toEqual("../assets/images/glasses.svg");
        });
    });
});