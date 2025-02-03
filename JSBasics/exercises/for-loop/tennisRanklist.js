function tennisRanklist(input){
    let tournamentsNum = Number(input[0]);
    let startingPoints = Number(input[1])
    let points = startingPoints;
    let winsCount = 0;

    for (let i = 2; i < input.length; i++){
        if (input[i] === 'W'){
            points += 2000
            winsCount++
        } else if (input[i] === 'F'){
            points += 1200
        } else if (input[i] === 'SF'){
            points += 720
        }
    }

    let avgPoints = Math.floor((points - startingPoints) / tournamentsNum)
    let winPercentage = (winsCount / tournamentsNum) * 100

    let result = `Final points: ${points}\n`
    result += `Average points: ${avgPoints}\n`
    result += `${winPercentage.toFixed(2)}%`

    console.log(result);
    
}

tennisRanklist(["4",
    "750",
    "SF",
    "W",
    "SF",
    "W"])
    