function sortArray (input) {
    const sortedArray = input.sort((a, b) => {
        let first = a.length - b.length;

        let second = a.localeCompare(b, undefined, { sensitivity: "base" });

        return first || second
    });

    return sortedArray.join('\n')
}

console.log(sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
