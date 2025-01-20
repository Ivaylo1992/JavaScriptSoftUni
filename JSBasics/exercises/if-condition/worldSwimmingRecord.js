function worldSwimmingRecord(currentRecordInSeconds, metersToSwim, secondsPerMeter){
    let swimmingTime = secondsPerMeter * metersToSwim;
    let waterResistanceDeficit = Math.floor(metersToSwim / 15) * 12.5;

    swimmingTime += waterResistanceDeficit;

    let diff = Math.abs(swimmingTime - currentRecordInSeconds);

    if (swimmingTime < currentRecordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${swimmingTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(55555.67,
    14,
    5.03
    
    );