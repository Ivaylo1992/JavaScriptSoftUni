function timeToWalk (steps, footprint, speed) {
    const distanceInKm = steps * footprint / 1000;
    const oneMinuteBreaks = Math.floor(distanceInKm / 0.5);

    const timeNeeded = (distanceInKm / speed) * 60 + oneMinuteBreaks;

    const hoursNeeded = Math.floor(timeNeeded / 60);
    const minutesNeeded = Math.floor(timeNeeded % 60);
    const secondsNeeded = Math.ceil(((timeNeeded % 60) % 1 ) * 60)
    
    const hoursLeadingZero = hoursNeeded < 10 ? '0': '';
    const minutesLeadingZero = minutesNeeded < 10 ? '0': '';
    const secondsLeadingZero = secondsNeeded < 10 ? '0': '';


    return `${hoursLeadingZero}${hoursNeeded}:${minutesLeadingZero}${minutesNeeded}:${secondsLeadingZero}${secondsNeeded}`
}

console.log(timeToWalk(2564, 0.70, 5.5));
