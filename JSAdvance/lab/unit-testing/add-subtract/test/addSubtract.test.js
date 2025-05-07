import { expect } from "chai";
import { createCalculator } from "../addSubtract.js";

describe("Test createCalculator function.", function () {
  it("Should return an object", function () {
    const expectedOutput = "[object Object]";
    const functionOutput = Object.prototype.toString.call(createCalculator());

    expect(expectedOutput).to.be.equal(functionOutput);
  });
  it("Should return an object with 3 functions", function () {
    const expectedOutput = "function";

    const func = createCalculator();
    const getActualType = typeof func.get;
    const addActualType = typeof func.get;
    const subtractActualType = typeof func.get;

    expect(expectedOutput).to.be.equal(getActualType);
    expect(expectedOutput).to.be.equal(addActualType);
    expect(expectedOutput).to.be.equal(subtractActualType);
  });
  it('Should return NaN if not a number is passed to the add function', function() {
    const input = 'Invalid!';

    const func = createCalculator();
    const expectedOutput = String(NaN);
    func.add(input)
    const actualOutput = String(func.get());

    expect(expectedOutput).to.be.equal(actualOutput);

  });
  it('Should return NaN if not a number is passed to the subtract function', function() {
    const input = 'Invalid!';

    const func = createCalculator();
    const expectedOutput = String(NaN);
    func.subtract(input)
    const actualOutput = String(func.get());

    expect(expectedOutput).to.be.equal(actualOutput);

  });
  it("Should return 0 with get method before changes are made.", function () {
    const expectedOutput = 0;
    const getFunctionOutput = createCalculator().get();

    expect(expectedOutput).to.be.equal(getFunctionOutput);
  });
  it("Should return expected result when add with a negative value given", function () {
    const inputNum = -2;

    // Trigger the add function
    const func = createCalculator();
    func.add(inputNum);

    const expectedResult = -2;
    const actualResult = func.get();

    expect(expectedResult).to.be.equal(actualResult);
  });
  it("Should return expected result when subtract with a negative value given", function () {
    const inputNum = -2;

    // Trigger the add function
    const func = createCalculator();
    func.subtract(inputNum);

    const expectedResult = 2;
    const actualResult = func.get();

    expect(expectedResult).to.be.equal(actualResult);
  });
  it("Should return expected result when add with a positive value given", function () {
    const inputNum = 2;

    // Trigger the add function
    const func = createCalculator();
    func.add(inputNum);

    const expectedResult = 2;
    const actualResult = func.get();

    expect(expectedResult).to.be.equal(actualResult);
  });
  it("Should return expected result when subtract with a positive value given", function () {
    const inputNum = 2;

    // Trigger the add function
    const func = createCalculator();
    func.subtract(inputNum);

    const expectedResult = -2;
    const actualResult = func.get();

    expect(expectedResult).to.be.equal(actualResult);
  });
  it("Should return expected result when subtract with a 0 given", function () {
    const inputNum = 0;

    // Trigger the add function
    const func = createCalculator();
    func.subtract(inputNum);

    const expectedResult = 0;
    const actualResult = func.get();

    expect(expectedResult).to.be.equal(actualResult);
  });
  it("Should return expected result when add with a 0 given", function () {
    const inputNum = 0;

    // Trigger the add function
    const func = createCalculator();
    func.add(inputNum);

    const expectedResult = 0;
    const actualResult = func.get();

    expect(expectedResult).to.be.equal(actualResult);
  });
});
