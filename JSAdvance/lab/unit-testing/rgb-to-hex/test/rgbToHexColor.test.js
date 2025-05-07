import { expect } from "chai";
import { rgbToHexColor } from "../rgbToHexColor.js";

describe("Test rgbToHexColor", function () {
  it("Should return undefined with not a number passed for red color", function () {
    const [red, green, blue] = ["invalid", 10, 10];

    const expectedResult = undefined;
    const actualResult = rgbToHexColor(red, green, blue);

    expect(expectedResult).to.be.equal(actualResult);
  });
  it("Should return undefined with red color number below 0", function () {
    const [red, green, blue] = [-1, 10, 10];

    const expectedResult = undefined;
    const actualResult = rgbToHexColor(red, green, blue);

    expect(expectedResult).to.be.equal(actualResult);
  });
  it("Should return undefined with red color number above 255", function () {
    const [red, green, blue] = [256, 10, 10];

    const expectedResult = undefined;
    const actualResult = rgbToHexColor(red, green, blue);

    expect(expectedResult).to.be.equal(actualResult);
  });
  it("Should return undefined with not a number passed for green color", function () {
    const [red, green, blue] = [10, "invalid", 10];

    const expectedResult = undefined;
    const actualResult = rgbToHexColor(red, green, blue);

    expect(expectedResult).to.be.equal(actualResult);
  });
  it("Should return undefined with green color number below 0", function () {
    const [red, green, blue] = [10, -1, 10];

    const expectedResult = undefined;
    const actualResult = rgbToHexColor(red, green, blue);

    expect(expectedResult).to.be.equal(actualResult);
  });
  it("Should return undefined with green color number above 255", function () {
    const [red, green, blue] = [10, 256, 10];

    const expectedResult = undefined;
    const actualResult = rgbToHexColor(red, green, blue);

    expect(expectedResult).to.be.equal(actualResult);
  });
  it("Should return undefined with not a number passed for blue color", function () {
    const [red, green, blue] = [10, 10, "invalid"];

    const expectedResult = undefined;
    const actualResult = rgbToHexColor(red, green, blue);

    expect(expectedResult).to.be.equal(actualResult);
  });
  it("Should return undefined with blue color number below 0", function () {
    const [red, green, blue] = [10, 10, -1];

    const expectedResult = undefined;
    const actualResult = rgbToHexColor(red, green, blue);

    expect(expectedResult).to.be.equal(actualResult);
  });
  it("Should return undefined with blue color number above 255", function () {
    const [red, green, blue] = [10, 10, 256];

    const expectedResult = undefined;
    const actualResult = rgbToHexColor(red, green, blue);

    expect(expectedResult).to.be.equal(actualResult);
  });

  it('Should return expected result with valid input (white)', function () {
    const [red, green, blue] = [255, 255, 255];

    const expectedResult = '#FFFFFF';
    const actualResult = rgbToHexColor(red, green, blue);

    expect(expectedResult).to.be.equal(actualResult)
  });
  it('Should return expected result with valid input (black)', function () {
    const [red, green, blue] = [0, 0, 0];

    const expectedResult = '#000000';
    const actualResult = rgbToHexColor(red, green, blue);

    expect(expectedResult).to.be.equal(actualResult)
  });
});
