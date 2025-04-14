function cookingByNumbers (n, op1, op2, op3, op4, op5) {
    const operations = {
        'chop': (a) => a / 2,
        'dice': (a) => Math.sqrt(a),
        'spice': (a) => a + 1,
        'bake': (a) => a * 3,
        'fillet': (a) => a * 0.8
    }
    let input = [op1, op2, op3, op4, op5]
    let num = Number(n);
    const result = [];

    for (let command of input) {
        num = operations[command](num);
        result.push(num)
    }

    return result.join('\n');
}

console.log(cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop'))