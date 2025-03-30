function trackWords (input) {
    let searchedWords = {};
    let words = input.shift().split(' ');

    for (let word of words) {
        searchedWords[word] = 0;
    }

    for (let currentWord of input) {
        if (searchedWords[currentWord]) {
            searchedWords[currentWord] += 1;
        }
    }

    for (let word of Object.keys(searchedWords)) {
        console.log(`${word} - ${searchedWords[word]}`);
    }
    
}

trackWords([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])