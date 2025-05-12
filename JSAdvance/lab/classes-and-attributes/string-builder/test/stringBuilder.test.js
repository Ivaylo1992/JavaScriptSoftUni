import { assert, expect } from "chai";
import { StringBuilder } from "../stringBuilder.js";

describe("String builder class test", function () {
  it("should throw TypeError if not a string value is given to the constructor", function () {
    expect(() => new StringBuilder(123)).to.throw(TypeError, "Argument must be a string");
  });
  it('should create an array from the string in the constructor', function () {
    const newStr = new StringBuilder('Test');

    const expectedValue = Array.from('Test')

    expect(newStr._stringArray[0]).to.be.equal(expectedValue[0]);
    expect(newStr._stringArray[1]).to.be.equal(expectedValue[1]);
    expect(newStr._stringArray[2]).to.be.equal(expectedValue[2]);
    expect(newStr._stringArray[3]).to.be.equal(expectedValue[3]);

  });
  it('should return an empty array if an argument is not given', function () {
    const newStr = new StringBuilder();

    const expectedValue = 0;

    const actualValue = newStr._stringArray.length;

    expect(expectedValue).to.be.equal(actualValue);
  });
  it("should throw TypeError if not a string value is given to the append method", function () {
    expect(() => new StringBuilder().append(123)).to.throw(TypeError, "Argument must be a string");
  });
  it('should append to the _stringArray if a string is given to the append method', function () {
    const newStr = new StringBuilder();
    newStr.append('Test')

    const expectedValue = ['T', 'e', 's', 't']

    expect(newStr._stringArray[0]).to.be.equal(expectedValue[0]);
    expect(newStr._stringArray[1]).to.be.equal(expectedValue[1]);
    expect(newStr._stringArray[2]).to.be.equal(expectedValue[2]);
    expect(newStr._stringArray[3]).to.be.equal(expectedValue[3]);

  });
  it("should throw TypeError if not a string value is given to the prepend method", function () {
    expect(() => new StringBuilder().prepend(123)).to.throw(TypeError, "Argument must be a string");
  });
  it('should prepend to the _stringArray if a string is given to the prepend method', function () {
    const newStr = new StringBuilder('One');
    newStr.prepend('Test')

    const expectedValue = ['T', 'e', 's', 't', 'O', 'n', 'e']

    expect(newStr._stringArray[0]).to.be.equal(expectedValue[0]);
    expect(newStr._stringArray[1]).to.be.equal(expectedValue[1]);
    expect(newStr._stringArray[2]).to.be.equal(expectedValue[2]);
    expect(newStr._stringArray[3]).to.be.equal(expectedValue[3]);
    expect(newStr._stringArray[4]).to.be.equal(expectedValue[4]);
    expect(newStr._stringArray[5]).to.be.equal(expectedValue[5]);
    expect(newStr._stringArray[6]).to.be.equal(expectedValue[6]);
  });
  it("should throw TypeError if not a string value is given to the insertAt method", function () {
    expect(() => new StringBuilder().insertAt(123)).to.throw(TypeError, "Argument must be a string");
  });
  it('should add to the _stringArray if a string is given to the insertAt method', function () {
    const newStr = new StringBuilder('One');
    newStr.insertAt('Da', 0)

    const expectedValue = ['D','a', 'O', 'n', 'e']

    expect(newStr._stringArray[0]).to.be.equal(expectedValue[0]);
    expect(newStr._stringArray[1]).to.be.equal(expectedValue[1]);
    expect(newStr._stringArray[2]).to.be.equal(expectedValue[2]);
    expect(newStr._stringArray[3]).to.be.equal(expectedValue[3]);
    expect(newStr._stringArray[4]).to.be.equal(expectedValue[4]);

  });

  it('should remove from the _stringArray if a string is given to the remove method', function () {
    const newStr = new StringBuilder('One');
    newStr.remove(0, 2)

    const expectedValue = ['e']

    expect(newStr._stringArray[0]).to.be.equal(expectedValue[0]);

  });

  it('should return string representation of _stringArray', function () {
    const newStr = new StringBuilder('One');

    const expectedValue = 'One';
    const actualValue = newStr.toString();

    expect(actualValue).to.be.equal(expectedValue);

  });

});
