function findSequence (n , k) {
    const result = [1];

    for (let i = 0; i < n - 1; i++) {
        let initialSum = 0;
        let subArray = [];
        if (i - k < 0) {
            subArray = result.slice();
        } else {
            subArray = result.slice(i + 1 - k, i + 1);
        }
        let sum = subArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialSum)
        result.push(sum)
    }
    return result
}

console.log(findSequence(6, 3));
