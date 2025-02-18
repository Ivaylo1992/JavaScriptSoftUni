function excursionCalculator(peopleCount, season){
    let totalPrice = 0;
    if (peopleCount <= 5) {
        switch (season) {
            case 'spring': 
                totalPrice = peopleCount * 50;
                break;
            case 'summer': 
                totalPrice = peopleCount * 48.50 * 0.85;
                break;
            case 'autumn': 
                totalPrice = peopleCount * 60;
                break;
            case 'winter': 
                totalPrice = peopleCount * 86 * 1.08;
                break;
        }
    } else {
        switch (season) {
            case 'spring': 
                totalPrice = peopleCount * 48;
                break;
            case 'summer': 
                totalPrice = peopleCount * 45 * 0.85;
                break;
            case 'autumn': 
                totalPrice = peopleCount * 49.5;
                break;
            case 'winter': 
                totalPrice = peopleCount * 85 * 1.08;
                break;
        }
    }
    console.log(`${totalPrice.toFixed(2)} leva.`);
    
}

excursionCalculator(15,
    "autumn");