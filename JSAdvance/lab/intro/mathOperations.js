function calculate (x, y, operator) {
    const operations = {
        '+': (a, b) => a + b, 
        '-': (a, b) => a - b, 
        '*': (a, b) => a * b, 
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        '**': (a, b) => a ** b,
    }

    return operations[operator](x, y);
}

console.log(calculate(3, 5.5, '*'));
