function sortedNumbers (input) {
    const sortedList = input.sort((a, b) => a - b);
    const result = [];

    let counter = 1;

    while (sortedList.length > 0) {
        let currentElement;

        if (counter % 2 !== 0) {
            currentElement= sortedList.shift();        
        } else {
            currentElement = sortedList.pop();
        }

        result.push(currentElement);
        counter += 1;
    }

    return result
}

console.log(sortedNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]