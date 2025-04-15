function sortByNegativeAndPositive (input) {
    const result = [];

    for (let el of input) {
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el)
        }
    }

    return result.join('\n')
}

console.log(sortByNegativeAndPositive([7, -2, 8, 9]));
