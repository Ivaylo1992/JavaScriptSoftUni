function makeDictionary (input) {
    let words = [];

    class Dictionary {
        constructor (term, definition) {
            this.term = term;
            this.definition = definition;
        }

        info () {
            return `Term: ${this.term} => Definition: ${this.definition}`;
        }
    }

    for (data of input) {
        let midObject = JSON.parse(data);

        let newWord = new Dictionary(Object.keys(midObject).shift(), Object.values(midObject).shift());
        
        let isNew = true;

        for (let index in words) {
            if (words[index].term === newWord.term) {
                words[index] = newWord;
                isNew = false;
            }
        }

        if (isNew) {
            words.push(newWord);
        }
    }

    words = words.sort((a, b) => a.term.localeCompare(b.term));

    for (let word of words) {
        console.log(word.info());
    }
}

makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded Edit."}'
    ])