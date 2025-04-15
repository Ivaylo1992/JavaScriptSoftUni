function findSum (start, end) {
    const startIdx = Number(start);
    const endIdx = Number(end);

    let sum = 0;

    for (let i = startIdx; i <= endIdx; i++) {
        sum += i
    }

    return sum
}

console.log(findSum('-8', '20'));
