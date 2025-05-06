import { assert, expect } from 'chai';
import {sum} from '../sum.js'

describe('Test sum function', function (){
    it('Should return 0 if the array is empty', function () {
        const input = [];

        const expectedResult = 0;
        const actualResult = sum(input);

        expect(actualResult).to.be.equal(expectedResult);

    });
    it('Should return negative number when only negative numbers are given', function() {
        const input = [-1, -2, -3];

        const expectedResult = -6;
        const actualResult = sum(input);

        expect(actualResult).to.be.equal(expectedResult);
    });
    it('Should return NaN if not a number is given in the array', function() {
        const input = [-1, 'gosho', -3];

        const actualResult = sum(input);

        assert.isNaN(actualResult)
    });
    it('Should throw an error if the input is not an array', function() {
        const input = 123;
        let result;

        try {
            result = sum(input);
        } catch (ex) {
            result = ex.name
        }
        
        expect(result).to.be.equal('TypeError')

        
    }) 
})