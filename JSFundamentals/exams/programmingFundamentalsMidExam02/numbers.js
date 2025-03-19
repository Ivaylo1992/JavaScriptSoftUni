function numbers (input) {
    let values = input.split(' ').sort((a, b) => b - a).map(Number)
    let avgValue = values.reduce((a, b) => a + b) / values.length;

    let finalValues = values.filter(x => x > avgValue);
    
    if (finalValues.length) {
        console.log(finalValues.slice(0, 5).join(' '));
    } else {
        console.log('No');   
    }
}

numbers('1')