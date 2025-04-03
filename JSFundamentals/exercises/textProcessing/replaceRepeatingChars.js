function replaceRepeatingChars (string) {
    let newString = '';

    for (letter of string) {
        if (newString[newString.length - 1] != letter) {
            newString += letter;
        }
    }

    console.log(newString);
}

replaceRepeatingChars('qqqwerqwecccwd');