function listProcessor (input) {
    let list = [];

    processor = {
        'add': (value) => list.push(value),
        'remove': (value) => {
            list = list.filter((x) => x != value)
        },
        'print': () => console.log(list.join(','))
        
    }

    for (const command of input) {
        const [currCommand, value] = command.split(' ');
        processor[currCommand](value);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])