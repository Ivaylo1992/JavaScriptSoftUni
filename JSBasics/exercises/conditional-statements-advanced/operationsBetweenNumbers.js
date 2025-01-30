function operationsBetweenNumbers(numOne, numTwo, operator){
    let result = 0;
    let evenOrOdd = 0;
    switch(operator){
        case '+':
            result = numOne + numTwo
            evenOrOdd = (result % 2 === 0) ? 'even': 'odd';
            console.log(`${numOne} ${operator} ${numTwo} = ${result} - ${evenOrOdd}`);
            break;
        case '-':
            result = numOne - numTwo
            evenOrOdd = (result % 2 === 0) ? 'even': 'odd';
            console.log(`${numOne} ${operator} ${numTwo} = ${result} - ${evenOrOdd}`);
            break;
        case '*':
            result = numOne * numTwo
            evenOrOdd = (result % 2 === 0) ? 'even': 'odd';
            console.log(`${numOne} ${operator} ${numTwo} = ${result} - ${evenOrOdd}`);
            break;
        case '/':
            if (numTwo === 0) {
                console.log(`Cannot divide ${numOne} by zero`)
            } else {
                result = numOne / numTwo
                console.log(`${numOne} ${operator} ${numTwo} = ${result.toFixed(2)}`);
            }
            break;
        case '%':
            if (numTwo === 0) {
                console.log(`Cannot divide ${numOne} by zero`)
            } else {
                result = numOne % numTwo
                console.log(`${numOne} ${operator} ${numTwo} = ${result}`);
            }
            break;
    }
}

operationsBetweenNumbers(112,
    0,
    "/"
    
    );