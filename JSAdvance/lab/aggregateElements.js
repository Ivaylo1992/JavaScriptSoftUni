function aggregateElements (params) {
    let sumElements = 0;
    let sumInverse = 0;
    let concatSum = '';

    for (el of params) {
        sumElements += el;
        sumInverse += 1 / el;
        concatSum += el;
    }

    result = [sumElements, sumInverse, concatSum];

    return result.join('\n')
}

console.log(aggregateElements([2, 4, 8, 16]));
