function moving(input){
    let i = 0;
    let noMoreSpace = false;

    let apartmentDimensionA = input[i];
    i++;

    let apartmentDimensionB = input[i];
    i++;

    let apartmentDimensionC = input[i];
    i++;

    let freeSpace = apartmentDimensionA * apartmentDimensionB * apartmentDimensionC;

    let command = input[i];
    i++;

    while (command !== 'Done') {
        freeSpace -= Number(command);

        if (freeSpace <= 0) {
            noMoreSpace = true;
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }

        command = input[i];
        i++;
    }

    if (!noMoreSpace){
        console.log(`${freeSpace} Cubic meters left.`);   
    }
}


moving(["10", 
    "1",
    "2",
    "4", 
    "6",
    "Done"]);
    
    