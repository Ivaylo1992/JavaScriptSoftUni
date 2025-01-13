function vegetableMarket(vegetablesPricePerKg, fruitPricePerKg, vegetablesKg, fruitKg){
    let totalIncome = vegetablesPricePerKg * vegetablesKg + fruitPricePerKg * fruitKg
    let totalIncomeInEuro = totalIncome / 1.94

    console.log(totalIncomeInEuro.toFixed(2));
    
}

vegetableMarket(1.5, 2.5, 10, 10);