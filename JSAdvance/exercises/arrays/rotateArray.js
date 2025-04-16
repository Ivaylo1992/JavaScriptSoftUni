function rotateArray (input, rotations) {
    for (let _ = 0; _ < rotations; _++) {
        input.unshift(input.pop());
    }

    return input.join(' ')
}

console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15));
