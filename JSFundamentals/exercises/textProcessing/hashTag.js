function findSpecialWords (text) {
    let isAlpha = word => /^[a-zA-Z]*$/.test(word);

    for (word of text.split(' ')) {
        if (word.startsWith('#') && word.length > 1 && isAlpha(word.substring(1, word.length))) {
            console.log(word.substring(1, word.length));
        }
    }
}

findSpecialWords('The symbol # is known #variously in English-speaking #regions as the #number sign'
)