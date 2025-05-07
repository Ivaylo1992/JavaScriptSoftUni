import { expect } from 'chai';
import {isOddOrEven} from '../oddOrEven.js'

describe ('Test isOddOrEven function', function () {
    it('Should return undefined if the input is not a string', function() {
        const input = 123;

        const expectedResult = undefined;
        const actualResult = isOddOrEven(input);

        expect(expectedResult).to.be.equal(actualResult);
    });
    it('Should return "even" if the input length is an even number', function() {
        const input = '1234';

        const expectedResult = 'even';
        const actualResult = isOddOrEven(input);

        expect(expectedResult).to.be.equal(actualResult);
    });
    it('Should return "odd" if the input length is an odd number', function() {
        const input = '123';

        const expectedResult = 'odd';
        const actualResult = isOddOrEven(input);

        expect(expectedResult).to.be.equal(actualResult);
    });
})