function findTheSmallestTwo (input) {
    return input.sort((a, b) => a - b).slice(0, 2).join(' ')
}

console.log(findTheSmallestTwo([30, 15, 50, 5]));
