function equalNeighbors (input) {
    let equalsCount = 0;

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            let currentEl = input[row][col];
            let rightNeighbor = input[row][col + 1];

            let downNeighbor = row + 1 < input.length ? input[row + 1][col] : undefined
            if (currentEl === rightNeighbor){
                equalsCount += 1;
            }

            if (currentEl == downNeighbor) {
                equalsCount += 1;
            }
        }
    }

    return equalsCount;
}

console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'], ['well', 'done', 'yo', '6'], ['not', 'done', 'yet', '5']]));

