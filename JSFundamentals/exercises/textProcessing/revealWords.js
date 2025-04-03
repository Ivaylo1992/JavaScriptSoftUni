function revealWords (words, text) {
    let wordsArr = words.split(', ');

    for (let word of wordsArr) {
        let wordToReplace = '*'.repeat(word.length)
        text = text.replace(wordToReplace, word);
    }

    console.log(text);
    
}

revealWords('great',
'softuni is ***** place for learning new programming languages')