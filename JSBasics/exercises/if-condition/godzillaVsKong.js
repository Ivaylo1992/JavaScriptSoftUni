

function godzillaVsKong(budget, extrasCount, clothingPricePerExtra){
    let decor = budget * 0.1;
    let totalClothingPrice = clothingPricePerExtra * extrasCount;

    if (extrasCount > 150) {
        totalClothingPrice *= 0.9
    }

    let totalExpenses = decor + totalClothingPrice;

    let = diff = Math.abs(totalExpenses - budget);

    if (budget >= totalExpenses) {
        console.log('Action!');
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    } else {
        console.log('Not enough money!');
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }

}

godzillaVsKong(15437.62,
    186,
    57.99
    
    );