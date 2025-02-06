function coins(goalChange){
    let coinsCounter = 0;
    let change = 0;
    goalChange = Math.round(goalChange * 100);

    while (change !== goalChange){
        if (change + 200 <= goalChange){
            coinsCounter += 1;
            change += 200
            continue;
        } else if (change + 100 <= goalChange){
            coinsCounter += 1;
            change += 100
            continue;
        } else if (change + 50 <= goalChange){
            coinsCounter += 1;
            change += 50
            continue;
        } else if (change + 20 <= goalChange){
            coinsCounter += 1;
            change += 20
            continue;
        } else if (change + 10 <= goalChange){
            coinsCounter += 1;
            change += 10
            continue;
        } else if (change + 5 <= goalChange){
            coinsCounter += 1;
            change += 5
            continue;
        } else if (change + 2 <= goalChange){
            coinsCounter += 1;
            change += 2
            continue;
        } else if (change + 1 <= goalChange){
            coinsCounter += 1;
            change += 1
            continue;
        }


    }
    console.log(coinsCounter);
}

coins(1.63);