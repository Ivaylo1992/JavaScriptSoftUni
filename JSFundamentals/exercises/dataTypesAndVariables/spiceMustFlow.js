function spiceMustFlow(startingYield) {
    let days = 0;
    let extractedSpices = 0;
    let workerNeeds = 26;
    let dailyDrop = 10;

    while (startingYield >= 100) {
        days += 1;
        extractedSpices += startingYield - workerNeeds;
        startingYield -= dailyDrop;
    }

    extractedSpices -= workerNeeds;

    extractedSpices = extractedSpices >= 0 ? extractedSpices : 0;
    

    console.log(days);
    console.log(extractedSpices);
}

spiceMustFlow(0)