function addOrRemove (input) {
    const result = [];

    for (let idx in input) {
        let command = input[idx]
        switch (command) {
            case 'add':
                result.push(Number(idx) + 1)
                break;
            
            case 'remove':
                result.pop()
                break;
        }
    }

    return result.length ? result.join('\n') : 'Empty'
}

console.log(addOrRemove(['add', 'add', 'remove', 'add', 'add']));
