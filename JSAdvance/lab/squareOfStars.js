function squareOfStars (count) {
    const result = [];

    for (let i = 0; i < count; i++) {
        result.push('* '.repeat(count));
    }

    return result.join('\n')
}

console.log(squareOfStars(2));
