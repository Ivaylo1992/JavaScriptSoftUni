function perfectNumber (number) {
    let numDivisors = findDivisors(number);
    let divisorsSum = findDivisorsSum(numDivisors);

    if (divisorsSum === number) {
        return 'We have a perfect number!'
    } 

    return 'It\'s not so perfect.' 

    function findDivisors (num) {
        let divisors = [];

        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                divisors.push(i)
            }
        }

        return divisors;
    }

    function findDivisorsSum(divisors) {
        let divisorsSum = 0;

        for (let divisor of divisors) {
            divisorsSum += divisor;
        }

        return divisorsSum
    }


}

let output1 = perfectNumber(6);
let output2 = perfectNumber(28);
let output3 = perfectNumber(1236498);

console.log(output1);
console.log(output2);
console.log(output3);
