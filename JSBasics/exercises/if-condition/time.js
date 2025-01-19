function timePlusFifteen(hours, minutes){
    let totalTimeMinutes = hours * 60 + minutes;
    let newTime = totalTimeMinutes + 15

    let newHour = Math.floor(newTime / 60)
    let newMinutes = newTime % 60

    if (newHour > 23){
        newHour = 0
    }

    if (newMinutes < 10){
        console.log(`${newHour}:0${newMinutes}`);
    } else {
        console.log(`${newHour}:${newMinutes}`);
        
    }
}

timePlusFifteen();