function findBiggerHalf (input) {
    return input.sort((a, b) => a - b).slice(Math.floor(input.length / 2), input.length)
}

console.log(findBiggerHalf([3, 19, 14, 7, 2, 19, 6]));
