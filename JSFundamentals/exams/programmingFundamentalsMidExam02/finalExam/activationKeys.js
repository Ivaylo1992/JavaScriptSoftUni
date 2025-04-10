function manipulateActivationKeys(input) {
    let initialKey = input.shift();
    
    let command = input.shift();

    let actionsObj = {
        'Contains': checkSubstring,
        'Flip': flipChars,
        'Slice': sliceKey,
    }

    while (command != 'Generate') {
        let info = command.split('>>>');
        let action = info.shift();

        if (action === 'Contains') {
            console.log(actionsObj[action](initialKey, info));
        } else {
            initialKey = actionsObj[action](initialKey, info);
            console.log(initialKey);
        }

        command = input.shift();
    }

    console.log(`Your activation key is: ${initialKey}`);
    

    function checkSubstring (key, info) {
        substring = info.shift();
        if (key.includes(substring)) {
            return `${key} contains ${substring}`;
        } else {
            return "Substring not found!";
        }
    }

    function flipChars (key, info) {
        let changeCase = info.shift();
        let startIndex = Number(info.shift());
        let endInex = Number(info.shift());

        let leftPart = key.slice(0, startIndex);
        let middlePart = key.slice(startIndex, endInex);
        let rightPart = key.slice(endInex);

        middlePart = middlePart
            .split('')
            .map(char =>
                changeCase === 'Lower'
                ? char.toLowerCase()
                : char.toUpperCase()
            )
            .join('');

        let finalKey = leftPart + middlePart + rightPart;
        return finalKey;
    }

    function sliceKey (key, info) {
        let startIndex = Number(info.shift());
        let endInex = Number(info.shift());

        let leftPart = key.slice(0, startIndex);
        let rightPart = key.slice(endInex);

        let finalKey = leftPart + rightPart;
        
        return finalKey;
    }
}

manipulateActivationKeys((["134softsf5ftuni2020rockz42",

    "Slice>>>3>>>7",
    
    "Contains>>>-rock",
    
    "Contains>>>-uni-",
    
    "Contains>>>-rocks",
    
    "Flip>>>Upper>>>2>>>8",
    
    "Flip>>>Lower>>>5>>>11",
    
    "Generate"]));
