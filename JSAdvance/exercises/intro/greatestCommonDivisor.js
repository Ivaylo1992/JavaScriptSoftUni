function findGreatestCommonDivisor (a, b) {
    const smallerNumber = a > b ? b : a;

    let greatestCommonDivisor = 1;

    for (let i = 2; i <= smallerNumber; i++) {
        if (a % i === 0 && b % i === 0) {
            greatestCommonDivisor = i;
        }
    }

    return greatestCommonDivisor;
}

console.log(findGreatestCommonDivisor(2154, 458));
