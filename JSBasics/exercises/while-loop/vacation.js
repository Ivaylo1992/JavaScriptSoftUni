function vacation(input){
    let hasSaved = false;
    let days = 0;
    let spendInARoll = 0;
    let maxSpendDays = 5;

    let i = 0;
    let moneyNeeded = Number(input[i]);
    let availableMoney = Number(input [i + 1]);
    i += 2;
    let action = input[i];
    let money = Number(input[i + 1]);

    while (true) {
        days += 1
        if (action === 'spend'){
            availableMoney -= money
            availableMoney = availableMoney < 0 ?  0: availableMoney;
            spendInARoll += 1
            if (spendInARoll === maxSpendDays){
                break;
            }
                
        } else if (action === 'save') {
            spendInARoll = 0
            availableMoney += money
            if (availableMoney >= moneyNeeded) {
                hasSaved = true;
                break;
            }
        }
        i += 2;
        action = input[i];
        money = Number(input[i + 1]);
    }

    if (hasSaved) {
        console.log(`You saved the money for ${days} days.`);
    } else {
        console.log(`You can't save the money.`);
        console.log(`${days}`);
    }
}

vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])
    
    ;