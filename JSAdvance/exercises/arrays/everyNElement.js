function sortArray (array, increment) {
    const result = [];

    for (let i = 0; i < array.length; i += increment) {
        result.push(array[i]);
    }

    return result;
}
