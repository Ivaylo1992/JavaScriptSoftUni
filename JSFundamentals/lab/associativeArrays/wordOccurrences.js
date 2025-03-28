function findOccurrences (input) {
    wordCounter = {};

    for (let word of input) {
        if (!wordCounter[word]) {
            wordCounter[word] = 0;
        }

        wordCounter[word] += 1;
    }

    let sortedWordCounter = Object.entries(wordCounter).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sortedWordCounter) {
        console.log(`${word} -> ${count} times`);
        
    }
}

findOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])