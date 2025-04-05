function shopping(budget, videoCardCount, processorCount, ramCount){
    let videoCardPrice = 250 * videoCardCount;
    let processorPrice = (videoCardPrice * 0.35) * processorCount;
    let ramPrice = (videoCardPrice * 0.1) * ramCount;

    let totalPrice = videoCardPrice + processorPrice + ramPrice

    if (videoCardCount > processorCount) {
        totalPrice *= 0.85
    }

    let diff = Math.abs(budget - totalPrice)

    if (budget >= totalPrice) {
        console.log(`You have ${diff.toFixed(2)} leva left!`);   
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }
}


