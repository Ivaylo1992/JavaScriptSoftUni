function numbersDivisibleBy9(start, finish){
    let result = 0;
    let numbers = ''

    for (let i = start; i <= finish; i++){
        if (i % 9 === 0) {
            result += i
            numbers += i + '\n'
        }
    }

    console.log(`The sum: ${result}`);
    console.log(numbers.trim());
    
    
}

numbersDivisibleBy9(100, 200);