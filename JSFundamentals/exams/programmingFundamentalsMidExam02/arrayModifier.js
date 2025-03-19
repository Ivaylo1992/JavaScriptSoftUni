function arrayModifier (input) {
    let arr = input.shift().split(' ').map(Number);

    let command = input.shift();

    while (command !== 'end') {
        let tokens = command.split(' ');

        let action = tokens.shift();

        if (action === 'swap') {
            let firstIndex = Number(tokens.shift());
            let secondIndex = Number(tokens.shift());

            arr = swapElements(firstIndex, secondIndex, arr);

        } else if (action === 'multiply') {
            let firstIndex = Number(tokens.shift());
            let secondIndex = Number(tokens.shift());
            
            arr = multiplyElement(firstIndex, secondIndex, arr);

        } else if (action === 'decrease') {
            arr = decreaseAllElements(arr);
        }

        command = input.shift();
    }

    function swapElements(indexOne, indexTwo, currentArray) {
        let buffer = currentArray[indexOne];
        currentArray[indexOne] = currentArray[indexTwo];
        currentArray[indexTwo] = buffer;
        
        return currentArray;
    }

    function multiplyElement (indexOne, indexTwo, currentArray) {
        currentArray[indexOne] *= currentArray[indexTwo];
        
        return currentArray;
    }

    function decreaseAllElements(currentArray) {
        return currentArray.map(x => x - 1);
    }

    console.log(arr.join(', '));
    
}

arrayModifier( [
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]);