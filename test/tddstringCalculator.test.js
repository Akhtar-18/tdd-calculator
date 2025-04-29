const add = require("../src/tddstringCalculator");

describe("String Calculator", () => {

    describe("Test Case 1: Empty String", () => {
        test("returns 0 for empty string", () => {
            expect(add("")).toBe(0);
        });
    });

    describe("Test Case 2: Single Number", () => {
        test("returns number for a single number", () => {
            expect(add("5")).toBe(5);
        });
    });

    describe("Test Case 3: Sum of two comma-separated numbers", () => {
        test("returns sum of two comma separated numbers", () => {
            expect(add("1,2")).toBe(3);
        });
    });

    describe("Test Case 4: Newline as delimiter", () => {
        test("handles new lines as delimiter", () => {
            expect(add("1\n2,3")).toBe(6);
        });
    });

    describe("Test Case 5: Custom single character delimiter", () => {
        test("supports custom single character delimiter", () => {
            expect(add("//;\n1;2")).toBe(3);
        });
    });

    describe("Test Case 6: Negative Numbers", () => {
        test("throws exception for negative numbers", () => {
            expect(() => add("1,-2,3,-4")).toThrow("Negatives not allowed: -2, -4");
        });
    });

    describe("Test Case 7: Ignore numbers > 1000", () => {
        test("ignores numbers greater than 1000", () => {
            expect(add("2,1001")).toBe(2);
        });
    });

    describe("Test Case 8: Delimiters of any length", () => {
        test("supports delimiters of any length", () => {
            expect(add("//[***]\n1***2***3")).toBe(6);
        });
    });

    describe("Test Case 9: Multiple custom delimiters", () => {
        test("supports multiple custom delimiters", () => {
            expect(add("//[*][%]\n1*2%3")).toBe(6);
        });
    });

});