function lunchBreak(seriesName, episodeTime, breakTime){
    let timeForRest = (1 / 8) * breakTime;
    let timeForLunch = (1 / 4) * breakTime;

    let freeTime = breakTime - timeForLunch - timeForRest;

    let diff = Math.abs(freeTime - episodeTime)

    if (freeTime >= episodeTime) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(diff)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(diff)} more minutes.`);
        
    }
}

lunchBreak("Game of Thrones",
60,
96
);

