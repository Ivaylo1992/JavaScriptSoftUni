function transportPrice(kilometers, timePeriod){
    let transportPrice = 0;

    if (kilometers < 20 && timePeriod === 'day') {
        transportPrice = 0.7 + 0.79 * kilometers
    } else if (kilometers < 20 && timePeriod === 'night') {
        transportPrice = 0.7 + 0.90 * kilometers
    }else if (kilometers < 100) {
        transportPrice = 0.09 * kilometers
    }else {
        transportPrice = 0.06 * kilometers
    }

    console.log(transportPrice.toFixed(2));
    
}



transportPrice(180,
    'night'
    
    );