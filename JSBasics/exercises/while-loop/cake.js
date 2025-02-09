function cake(input){
    let i = 0;
    let noMorePieces = false;
    let cakeSideA = input[i];
    i++;

    let cakeSideB = input[i];
    i++;

    let pieces = cakeSideA * cakeSideB;
    let command = input[i];
    i++;

    while (command !== 'STOP') {
        pieces -= Number(command)

        if (pieces <= 0) {
            console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`);
            noMorePieces = true;
            break;
        }

        command = input[i]
        i++
    }

    if (!noMorePieces) {
        console.log(`${pieces} pieces are left.`);
        
    }

}

cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])
    
    ;