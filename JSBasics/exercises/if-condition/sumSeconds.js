function sumSeconds(timeOne, timeTwo, timeThree){
    let totalTime = timeOne + timeTwo + timeThree;
    let timeSeconds = totalTime % 60;
    let timeMinutes = totalTime / 60

    if (timeSeconds < 10) {
        console.log(`${Math.floor(timeMinutes)}:0${timeSeconds}`);
    } else {
        console.log(`${Math.floor(timeMinutes)}:${timeSeconds}`);
    }
}

sumSeconds(22,
    7, 
    34
    
    );