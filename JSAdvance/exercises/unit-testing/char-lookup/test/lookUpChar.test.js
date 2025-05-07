import { expect } from 'chai';
import {lookupChar} from '../lookUpChar.js'

describe ('Test lookupChar function', function () {
    it('Should return undefined if the first param is not a string', function () {
        const [string, index] = [123, 1];

        const expectedResult = undefined;
        const actualResult = lookupChar(string, index);

        expect(expectedResult).to.be.equal(actualResult);
    });
    it('Should return undefined if the second param is not an integer', function () {
        const [string, index] = ['string', 1.25];

        const expectedResult = undefined;
        const actualResult = lookupChar(string, index);

        expect(expectedResult).to.be.equal(actualResult);
    });
    it('Should return "Incorrect index" if the index param is bellow 0', function () {
        const [string, index] = ['string', -1];

        const expectedResult = 'Incorrect index';
        const actualResult = lookupChar(string, index);

        expect(expectedResult).to.be.equal(actualResult);
    });
    it('Should return "Incorrect index" if the index param is above the last index of the given string', function () {
        const [string, index] = ['string', 6];

        const expectedResult = 'Incorrect index';
        const actualResult = lookupChar(string, index);

        expect(expectedResult).to.be.equal(actualResult);
    });
    it('Should return expected value with valid params', function() {
        const [string, index] = ['string', 5];

        const expectedResult = 'g';
        const actualResult = lookupChar(string, index);

        expect(expectedResult).to.be.equal(actualResult);
    })
})