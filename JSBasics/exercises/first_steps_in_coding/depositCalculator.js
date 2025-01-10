function depositCalculator(depositSum, depositPeriod, anualInterest){
    let newAnualInterest = anualInterest / 100
    let finalSum = depositSum + depositPeriod * ((depositSum * newAnualInterest) / 12)
    console.log(finalSum)
}

depositCalculator(200, 3, 5.7)