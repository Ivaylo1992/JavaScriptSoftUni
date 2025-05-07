import { expect } from "chai";
import { mathEnforcer } from "../mathEnforce.js";

describe("Math enforcer", function () {
  describe("addFive", function () {
    it("should return undefined with a non-number parameter", function () {
        const num = 'str';

        const expectedOutput = undefined;
        const actualOutput = mathEnforcer.addFive(num);

        expect(expectedOutput).to.be.equal(actualOutput);
    });
    it("should return correct output with a valid positive number", function () {
        const num = 5;

        const expectedOutput = 10;
        const actualOutput = mathEnforcer.addFive(num);

        expect(expectedOutput).to.be.equal(actualOutput);
    });
    it("should return correct output with a valid negative number", function () {
        const num = -5;

        const expectedOutput = 0;
        const actualOutput = mathEnforcer.addFive(num);

        expect(expectedOutput).to.be.equal(actualOutput);
    });

    it("should return correct output with a valid float number", function () {
        const num = 5.5;

        const expectedOutput = 10.5;
        const actualOutput = mathEnforcer.addFive(num);

        expect(expectedOutput).to.be.equal(actualOutput);
    });
  });
  describe("subtractTen", function () {
    it("should return undefined with a non-number parameter", function () {
        const num = 'str';

        const expectedOutput = undefined;
        const actualOutput = mathEnforcer.subtractTen(num);

        expect(expectedOutput).to.be.equal(actualOutput);
    });
    it("should return correct output with a valid positive number", function () {
        const num = 5;

        const expectedOutput = -5;
        const actualOutput = mathEnforcer.subtractTen(num);

        expect(expectedOutput).to.be.equal(actualOutput);
    });
    it("should return correct output with a valid negative number", function () {
        const num = -5;

        const expectedOutput = -15;
        const actualOutput = mathEnforcer.subtractTen(num);

        expect(expectedOutput).to.be.equal(actualOutput);
    });
    it("should return correct output with a float input", function () {
        const num = 1.1;

        const expectedOutput = -8.9;
        const actualOutput = mathEnforcer.subtractTen(num);

        expect(expectedOutput).to.be.equal(actualOutput);
    });
  });
  describe("sum", function () {
    it("should return undefined with a non-number first parameter", function () {
        const [numOne, numTwo] = ['str', 1];

        const expectedOutput = undefined;
        const actualOutput = mathEnforcer.sum(numOne, numTwo);

        expect(expectedOutput).to.be.equal(actualOutput);
    });

    it("should return undefined with a non-number second parameter", function () {
        const [numOne, numTwo] = [ 1, 'str'];

        const expectedOutput = undefined;
        const actualOutput = mathEnforcer.sum(numOne, numTwo);

        expect(expectedOutput).to.be.equal(actualOutput);
    });
    it("should return correct output with correct parameters", function () {
        const [numOne, numTwo] = [1, 1];

        const expectedOutput = 2;
        const actualOutput = mathEnforcer.sum(numOne, numTwo);

        expect(expectedOutput).to.be.equal(actualOutput);
    });
    it("should return correct output with numOne negative and numTwo positive", function () {
        const [numOne, numTwo] = [-1, 1];

        const expectedOutput = 0;
        const actualOutput = mathEnforcer.sum(numOne, numTwo);

        expect(expectedOutput).to.be.equal(actualOutput);
    });
    it("should return correct output with numOne positive and numTwo negative", function () {
        const [numOne, numTwo] = [1, -1];

        const expectedOutput = 0;
        const actualOutput = mathEnforcer.sum(numOne, numTwo);

        expect(expectedOutput).to.be.equal(actualOutput);
    });
    it("should return correct output with negative numbers", function () {
        const [numOne, numTwo] = [-1, -1];

        const expectedOutput = -2;
        const actualOutput = mathEnforcer.sum(numOne, numTwo);

        expect(expectedOutput).to.be.equal(actualOutput);
    });
    it("should return correct output with mix float numTwo and int numOne", function () {
        const [numOne, numTwo] = [-1, -1.1];

        const expectedOutput = -2.1;
        const actualOutput = mathEnforcer.sum(numOne, numTwo);

        expect(expectedOutput).to.be.equal(actualOutput);
    });

    it("should return correct output with mix float numOne and int numTwo", function () {
        const [numOne, numTwo] = [-1.1, -1];

        const expectedOutput = -2.1;
        const actualOutput = mathEnforcer.sum(numOne, numTwo);

        expect(expectedOutput).to.be.equal(actualOutput);
    });
  });
});
