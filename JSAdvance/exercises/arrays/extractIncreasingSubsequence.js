function manipulateArray (input) {
    let biggestElement = -Number.MAX_VALUE;
    const result = [];

    for (let el of input) {
        if (el >= biggestElement) {
            biggestElement = el;
            result.push(el);
        }
    }

    return result;
}

console.log(manipulateArray([1,

    3,
    
    8,
    
    4,
    
    10,
    
    12,
    
    3,
    
    2,
    
    24]));
