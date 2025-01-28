function fishingBoat(budget, season, fishermenCount){
    let price = 0;

    switch(season){
        case 'Spring': price = 3000; break;
        case 'Winter': price = 2600; break;
        default: price = 4200; break;
    }

    if (fishermenCount <= 6){
        price *= 0.9
    } else if(fishermenCount <= 11){
        price *= 0.85
    } else {
        price *= 0.75
    }

    if (fishermenCount % 2 === 0 && season !== 'Autumn')
        price *= 0.95

    let moneyDiff = Math.abs(budget - price)

    if (budget < price){
        console.log(`Not enough money! You need ${moneyDiff.toFixed(2)} leva.`);
    } else {
        console.log(`Yes! You have ${moneyDiff.toFixed(2)} leva left.`);
    }
}

fishingBoat(2000,
    "Winter",
    13
    );