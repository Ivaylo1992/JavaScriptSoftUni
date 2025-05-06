import { assert, expect } from 'chai'
import {isSymmetric} from '../checkForSymmetry.js'


describe('Test isSymmetric function', function () {
    it('Should return false if not an array is passed', function () {
        const input = '123';

        const expectedResult = isSymmetric(input);

        assert.isFalse(expectedResult)
    });
    it('Should return false if a not symmetric array is passed ', function () {
        const input = [1, 2, 3];

        const expectedResult = isSymmetric(input);

        assert.isFalse(expectedResult)
    });
    it('Should return true if a symmetric array is passed', function () {
        const input = [1, 2, 1];

        const expectedResult = isSymmetric(input);

        assert.isTrue(expectedResult)
    });
    it('Should return true with an array with inconsistent data', function () {
        const input = [{}, NaN, {}];

        const expectedResult = isSymmetric(input);

        assert.isTrue(expectedResult)
    });
    it('Should work with negative numbers', function () {
        const input = [-1, -2, -1];

        const expectedResult = isSymmetric(input);

        assert.isTrue(expectedResult)
    })
})