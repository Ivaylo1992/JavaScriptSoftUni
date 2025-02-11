function traveling(input) {
    let i = 0;
    let command = input[i];
    i++;

    while (command !== 'End') {
        let destination = input[i];
        i++;

        let neededMoney = Number(input[i]);
        i++;

        let collectedSum = 0;

        while(collectedSum < neededMoney){
            collectedSum += Number(input[i]);
            i++;
        }
    }
}

traveling();