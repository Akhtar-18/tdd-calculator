const add = require("../src/tddstringCalculator");

describe("String Calculator", () => {

    describe("Test Case 1: Empty String", () => {
        test("returns 0 for empty string", () => {
            expect(add("")).toBe(0);
        });
    });

});