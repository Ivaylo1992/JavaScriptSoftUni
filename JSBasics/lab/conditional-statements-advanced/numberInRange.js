function numberInRange(number){
    if (Math.abs(number) <= 100 && number !== 0){
        console.log('Yes');
    } else {
        console.log('No');
    }
}

numberInRange(0);