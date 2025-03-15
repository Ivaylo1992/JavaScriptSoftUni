function factorialDivision (numOne, numTwo) {
    let firstFactorial = findFactorial(numOne);
    let secondFactorial = findFactorial(numTwo);
    let result = firstFactorial / secondFactorial;

    return result.toFixed(2);

    function findFactorial (number) {
        let factorial = 1;

        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }

        return factorial
    }
}

output1 = factorialDivision(5, 2);
output2 = factorialDivision(6, 2);

console.log(output1);
console.log(output2);
