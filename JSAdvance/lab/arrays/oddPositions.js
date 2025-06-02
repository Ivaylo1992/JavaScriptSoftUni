function processArray (input) {
    const result = [];

    for (let index in input) {
        if (index % 2 !== 0) {
            result.unshift(input[index] * 2)
        }
    }
    return result
}


console.log(processArray([10, 15, 20, 25]));
