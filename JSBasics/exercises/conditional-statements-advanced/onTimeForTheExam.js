function onTimeForTheExam(examHour, examMinutes, arrivalHour, arrivalMinutes){
    let examTimeInMinutes = examHour * 60 + examMinutes;
    let arrivalTimeInMinutes = arrivalHour * 60 + arrivalMinutes;

    let timeDiff = Math.abs(examTimeInMinutes - arrivalTimeInMinutes)
    let timeDiffHour = Math.floor(timeDiff / 60)
    let timeDiffMinutes = timeDiff % 60
    let extraZero = timeDiffMinutes < 10 ? '0' : '';

    if (arrivalTimeInMinutes > examTimeInMinutes){
        console.log(`Late`);
        if (timeDiffHour === 0){
            console.log(`${timeDiffMinutes} minutes after the start`);
        } else {
            console.log(`${timeDiffHour}:${extraZero}${timeDiffMinutes} hours after the start`);
        }
    } else if (timeDiff === 0){
        console.log(`On time`);
    } else if (timeDiff <= 30) {
        console.log(`On time`);
        if (timeDiffHour === 0){
            console.log(`${timeDiffMinutes} minutes before the start`);
        } else {
            console.log(`${timeDiffHour}:${extraZero}${timeDiffMinutes} hours before the start`);
        }
    } else {
        console.log(`Early`);
        if (timeDiffHour === 0){
            console.log(`${timeDiffMinutes} minutes before the start`);
        } else {
            console.log(`${timeDiffHour}:${extraZero}${timeDiffMinutes} hours before the start`);
        }
    }
}

onTimeForTheExam(11,
    30,
    12,
    29
    );