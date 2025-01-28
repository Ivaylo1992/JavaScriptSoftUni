function summerOutfit(degrees, timeOfDay){
    let outfit = 'Shirt';
    let shoes = 'Moccasins';

    switch(timeOfDay){
        case 'Morning': if (degrees <= 18){
            outfit = 'Sweatshirt'
            shoes = 'Sneakers'
        } else if (degrees <= 24){
            outfit = 'Shirt'
            shoes = 'Moccasins'
        } else {
            outfit = 'T-Shirt'
            shoes = 'Sandals'
        } break;
        case 'Afternoon': if (degrees <= 18){
            outfit = 'Shirt'
            shoes = 'Moccasins'
        } else if (degrees <= 24){
            outfit = 'T-Shirt'
            shoes = 'Sandals'
        } else {
            outfit = 'Swim Suit'
            shoes = 'Barefoot'
        } break;
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(22,
    "Afternoon"
    );