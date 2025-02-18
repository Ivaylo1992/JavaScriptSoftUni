function excursionSale(input){
    let i = 0;

    let seaHolidaysCount = Number(input[i]);
    i++;

    let mountainHolidaysCount = Number(input[i]);
    i++;

    let command = input[i];
    i++;

    let isEverythingSold = false;
    let profit = 0;

    while (command !== 'Stop') {
        if (seaHolidaysCount === 0 && mountainHolidaysCount === 0) {
            isEverythingSold = true;
            console.log(`Good job! Everything is sold.`);
            console.log(`Profit: ${profit} leva.`);
            break;
        }

        switch (command) {
            case 'sea':
                if (seaHolidaysCount > 0) {
                    seaHolidaysCount -= 1;
                    profit += 680;
                }
                break;

            case 'mountain':
                if (mountainHolidaysCount > 0) {
                    mountainHolidaysCount -= 1;
                    profit += 499;
                }
                break;
        }

        command = input[i];
        i++;
    }

    if (!isEverythingSold) {
        console.log(`Profit: ${profit} leva.`);
        
    }
}

excursionSale(["6",
    "3",
    "sea",
    "mountain",
    "mountain",
    "mountain",
    "sea",
    "Stop"])
    ;