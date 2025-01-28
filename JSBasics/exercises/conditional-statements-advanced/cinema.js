function cinema(projectionType, rollsCount, colsCount){
    let seatsCount = rollsCount * colsCount;
    let totalIncome = 0;

    if (projectionType === 'Premiere') {
        totalIncome = seatsCount * 12
    } else if(projectionType === 'Normal') {
        totalIncome = seatsCount * 7.5
    } else if(projectionType === 'Discount') {
        totalIncome = seatsCount * 5
    }

    console.log(`${totalIncome.toFixed(2)} leva`);
    
}

cinema("Premiere",
10,
12

);