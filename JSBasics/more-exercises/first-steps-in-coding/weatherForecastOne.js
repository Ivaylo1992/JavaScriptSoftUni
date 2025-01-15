function weatherForecastOne(weatherCondition){
    let result = "It's cold outside!";

    if (weatherCondition === 'sunny'){
        result = "It's warm outside!"
    }

    console.log(result);
    
}

weatherForecastOne('cloudy');