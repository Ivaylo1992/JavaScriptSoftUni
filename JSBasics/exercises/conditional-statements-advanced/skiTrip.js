function skiTrip(days, roomType, evaluation){
    let price = 0;

    switch (roomType) {
        case 'room for one person':
            price = (days - 1) * 18
            break;
        case 'apartment':
            price = (days - 1) * 25
            if (days < 10) {
                price *= 0.7
            } else if (days <= 15) {
                price *= 0.65
            } else {
                price *= 0.5
            } break;
        case 'president apartment':
            price = (days - 1) * 35
            if (days < 10) {
                price *= 0.9
            } else if (days <= 15) {
                price *= 0.85
            } else {
                price *= 0.8
            } break;
    }

    switch (evaluation) {
        case 'positive':
            price *= 1.25
            break;
        case 'negative':
            price *= 0.9
            break;
    }
    
    console.log(price.toFixed(2));
    
}

skiTrip(30,
    "president apartment",
    "negative"
    );