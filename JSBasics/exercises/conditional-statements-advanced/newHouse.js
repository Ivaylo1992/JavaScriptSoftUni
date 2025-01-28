function newHouse(flowerType, flowerCount, budget){
    let finalPrice = 0;

    switch (flowerType) {
        case 'Roses': 
            finalPrice = 5 * flowerCount;
            if (flowerCount > 80) {
                finalPrice *= 0.9
            } 
            break;
        case 'Dahlias': 
            finalPrice = 3.80 * flowerCount;
            if (flowerCount > 90) {
                finalPrice *= 0.85
            } 
            break;
        case 'Tulips': 
            finalPrice = 2.80 * flowerCount;
            if (flowerCount > 80) {
                finalPrice *= 0.85
            } 
            break;
        case 'Narcissus': 
            finalPrice = 3 * flowerCount;
            if (flowerCount < 120) {
                finalPrice *= 1.15
            } 
            break;
        case 'Gladiolus': 
            finalPrice = 2.50 * flowerCount;
            if (flowerCount < 80) {
                finalPrice *= 1.2
            } 
        break;
    }

    let moneyDiff = Math.abs(finalPrice - budget);

    if (budget < finalPrice){
        console.log(`Not enough money, you need ${moneyDiff.toFixed(2)} leva more.`);
    } else {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyDiff.toFixed(2)} leva left.`);
    }
}

newHouse("Tulips",
88,
260

);