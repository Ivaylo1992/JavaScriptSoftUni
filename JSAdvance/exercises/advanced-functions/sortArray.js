function sortArray (input, order) {
    const ops = {
        'asc': () => input.sort((a, b) => a - b),
        'desc': () => input.sort((a, b) => b - a)
    }

    return ops[order]()
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));
