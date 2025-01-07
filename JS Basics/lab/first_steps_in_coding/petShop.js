function calculateExpenses(dogFoodCount, catFoodCount){
    catFoodUnitPrice = 4
    dogFoodUnitPrice = 2.5

    let total = (catFoodUnitPrice * catFoodCount) + (dogFoodUnitPrice * dogFoodCount)

    console.log(`${total} lv.`)

}

calculateExpenses(5, 4);