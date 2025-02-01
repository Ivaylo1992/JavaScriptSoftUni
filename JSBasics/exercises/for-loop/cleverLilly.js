function cleverLilly(age, washerPrice, toyPrice){
    let moneySaved = 0;
    let moneyGiven = 10;

    for (let birthday = 1; birthday <= age; birthday++){
        if (birthday % 2 === 0){
            moneySaved += moneyGiven - 1;
            moneyGiven += 10;
        } else {
            moneySaved += toyPrice
        }
    }

    let moneyDiff = Math.abs(washerPrice - moneySaved)

    if (moneySaved >= washerPrice){
        console.log(`Yes! ${moneyDiff.toFixed(2)}`);
    } else {
        console.log(`No! ${moneyDiff.toFixed(2)}`);
    }
}

cleverLilly(10,
    170.00,
    6
    
    );