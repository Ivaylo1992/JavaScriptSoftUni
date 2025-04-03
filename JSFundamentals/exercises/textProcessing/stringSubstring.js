function findWord (searchedWord, text) {
    let isFound = false;

    for (let word of text.split(' ')) {
        if (searchedWord.toUpperCase() === word.toUpperCase()) {
            console.log(searchedWord);
            isFound = true;
            break;
        }
    }

    if (!isFound) {
        console.log(`${searchedWord} not found!`);
        
    }

}

findWord('python',
'JavaScript is the best programming language')