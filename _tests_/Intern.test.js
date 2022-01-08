const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("intern instantiation", () => {
        it("should create an intern object", () => {
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
        it("should return the intern's name", () => {
            const test = new Intern("Chabs", "", "", "");
            expect(test.getName()).toEqual("Chabs");
        });
    });
    describe("get id", () => {
        it("should return the intern's id", () => {
            const test = new Intern("", "666", "", "");
            expect(test.getId()).toEqual("666");
        });
    });
    describe("get email", () => {
        it("should return the intern's email", () => {
            const test = new Intern("", "", "chabs@gmail.com", "");
            expect(test.getEmail()).toEqual("chabs@gmail.com");
        });
    });
    describe("get school", () => {
        it("should return the intern's school", () => {
            const test = new Intern("", "", "", "Princeton");
            expect(test.getSchool()).toEqual("Princeton");
        });
    });
    describe("get all fields from an intern", () => {
        it("should return all fields of an intern", () => {
            const test = new Intern("David Schepis", "666", "chabs@gmail.com", "Princeton");
            const testArray = [test.getName(), test.getId(), test.getEmail(), test.getSchool(), test.getRole()];
            expect(testArray).toEqual(["David Schepis", "666", "chabs@gmail.com", "Princeton", "Intern"]);
        });
    });
    describe("get intern image", () => {
        it("should return the correct link to the intern's image", () => {
            const test = new Intern("", "", "", "");
            expect(test.getImage()).toEqual("../assets/images/diploma.svg");
        });
    });
});