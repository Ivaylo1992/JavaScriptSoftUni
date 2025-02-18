function maidenParty(maidenPartyPrice, loveMessagesCount,
    rosesCount, keysCount, picturesCount, surprisesCount) {
    
        let loveMessagesPrice = loveMessagesCount * 0.60;
        let rosesPrice = rosesCount * 7.20;
        let keysPrice = keysCount * 3.60;
        let picturesPrice = picturesCount * 18.20;
        let surprisesPrice = surprisesCount * 22;

        let orderItemsCount = loveMessagesCount + rosesCount + keysCount + picturesCount + surprisesCount;

        let totalPrice = loveMessagesPrice + rosesPrice + keysPrice + picturesPrice + surprisesPrice;

        if (orderItemsCount >= 25) {
            totalPrice *= 0.65;
        }

        totalPrice *= 0.90;

        let priceDiff = Math.abs(totalPrice - maidenPartyPrice)

        if (totalPrice >= maidenPartyPrice) {
            console.log(`Yes! ${priceDiff.toFixed(2)} lv left.`);
        } else {
            console.log(`Not enough money! ${priceDiff.toFixed(2)} lv needed.`);
        }
}

maidenParty(320,
    8,
    2,
    5,
    5,
    1,
    );