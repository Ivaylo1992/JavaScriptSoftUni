function weatherForecastTwo(degrees){
    let message = 'unknown';

    if (degrees >= 5 && degrees < 12){
        message = 'Cold'
    } else if(degrees >= 12 && degrees < 15) {
        message = 'Cool'
    } else if(degrees >= 15 && degrees <= 20){
        message = 'Mild'
    } else if(degrees >= 20 && degrees < 26){
        message = 'Warm'
    }else if(degrees >= 26 && degrees <= 35){
        message = 'Hot'
    }

    
    console.log(message);
    
}

weatherForecastTwo(26)