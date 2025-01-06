function calculateExpenses(input){
    catFoodUnitPrice = 4
    dogFoodUnitPrice = 2,5
    
    let catFoodCount = Number(input[0])
    let dogFoodCount = Number(input[1])

    let total = (catFoodUnitPrice * catFoodCount) + (dog * dogFoodCount)

    console.log(`${total} lv.`)

}

calculateExpenses(5, 4)