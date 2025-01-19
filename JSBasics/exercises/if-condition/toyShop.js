function toyShop(holidayPrice, puzzleCount, dollCount, bearsCount, minionCount, truckCount){
    let puzzlePrice = puzzleCount* 2.6;
    let dollPrice = dollCount * 3;
    let bearPrice = bearsCount * 4.1;
    let minionPrice = minionCount * 8.2;
    let truckPrice = truckCount * 2;

    let totalIncome = truckPrice + dollPrice + puzzlePrice + bearPrice + minionPrice
    let totalToysPurchased = puzzleCount + dollCount + bearsCount + minionCount + truckCount
    
    if (totalToysPurchased >= 50) {
        totalIncome *= 0.75
    }

    totalIncome *= 0.9

    let diff = Math.abs(totalIncome - holidayPrice)

    if (totalIncome >= holidayPrice) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }

}

toyShop(320,
    8,
    2,
    5,
    5,
    1
    
    );