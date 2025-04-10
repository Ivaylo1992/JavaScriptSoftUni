function mirrorWords (input) {
    let pattern = /([@#])(?<word>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g
    let text = input.shift();
    
    let wordPairsObj = findWordPairs(pattern, text);
    
    if (Object.keys(wordPairsObj).length) {
        console.log(`${Object.keys(wordPairsObj).length} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }

    let foundMirrorWords = findMirrorWords(wordPairsObj);
    
    if (foundMirrorWords.length) {
        console.log('The mirror words are:');
        console.log(foundMirrorWords.join(', '));
    } else {
        console.log('No mirror words!');
    }

    function findWordPairs (wordsPattern, currentText) {
        let mirrorWords = {};
        let result = wordsPattern.exec(currentText);

        while (result != null) {
            mirrorWords[result.groups.word] = result.groups.wordTwo;

            result = pattern.exec(text);
        }

        return mirrorWords;
    }

    function findMirrorWords (foundPairs) {
        result = [];

        for (let [wordOne, wordTwo] of Object.entries(foundPairs)) {
            let reverseValue = wordTwo.split('').reverse().join('');
            if (wordOne === reverseValue) {
                result.push(`${wordOne} <=> ${wordTwo}`);
            }
        }

        return result;
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]);

// mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])

// mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])