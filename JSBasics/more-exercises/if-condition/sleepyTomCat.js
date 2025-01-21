function sleepyTomCat(freeDays){
    let freeDaysPlayTime = freeDays * 127;
    let workDaysPlayTime = (365 - freeDays) * 63;
    let totalPlayTime = freeDaysPlayTime + workDaysPlayTime;

    let playTimeNorm = 30000;

    let diff = Math.abs(playTimeNorm - totalPlayTime);
    let diffHours = Math.floor(diff / 60);
    let diffMinutes = diff % 60

    if (totalPlayTime > playTimeNorm) {
        console.log('Tom will run away');
        console.log(`${diffHours} hours and ${diffMinutes} minutes more for play`);
    } else {
        console.log('Tom sleeps well');
        console.log(`${diffHours} hours and ${diffMinutes} minutes less for play`);
    }

}

sleepyTomCat(113);