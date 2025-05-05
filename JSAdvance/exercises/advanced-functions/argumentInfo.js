function argumentInfo (...input) {
    const types = {};

    for (let data of input) {
        let type = typeof data
        if (!types[type]) {
            types[type] = 0;
        }

        types[type] += 1
        console.log(`${type}: ${data}`);
    }

    const result = []

    const sortedTypes = Object.entries(types).sort((a, b) => b[1] - a[1]);

    for (const [type, count] of sortedTypes) {
        result.push(`${type} = ${count}`)
    }
    
    return result.join('\n')
}

console.log(argumentInfo(22, 'cat', 42, function () { console.log('Hello world!'); }));

