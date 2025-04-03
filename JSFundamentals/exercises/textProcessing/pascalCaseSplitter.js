function splitText (text) {
    let newText = '';

    for (index in text) {
        let char = text[index];
        if (char.toUpperCase() === char && index != 0) {
            newText += ' ' + char 
        } else {
            newText += char;
        }
    }

    console.log(newText.split(' ').join(', '));
}

splitText('SplitMeIfYouCanHaHaYouCantOrYouCan')