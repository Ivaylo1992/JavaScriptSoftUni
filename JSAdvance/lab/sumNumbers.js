function findSum (start, end) {
    const startIdx = Number(start);
    const endtIdx = Number(end);

    let sum = 0;

    for (let i = startIdx; i <= endtIdx; i++) {
        sum += i
    }

    return sum
}

console.log(findSum('-8', '20'));
