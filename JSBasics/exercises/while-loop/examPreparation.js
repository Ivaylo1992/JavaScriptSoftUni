function examPreparation(input){
    let maxFails = Number(input[0]);
    let fails = 0

    
    let problemsCount = 0;
    let hasFailed = false;
    let scoreSum = 0;
    let i = 1;
    let problemName = input[i];
    let lastProblem = problemName;
    let score = Number(input[i + 1]);
    i += 2

    while (problemName !== 'Enough'){
        lastProblem = problemName
        scoreSum += score;
        problemsCount += 1;
        if (score <= 4) {
            fails += 1;
            if (fails === maxFails) {
                hasFailed = true;
                break;
            }
        }
        problemName = input[i];
        score = Number(input[i + 1]);
        i += 2
    }

    let avgScore = scoreSum / problemsCount

    if (hasFailed) {
        console.log(`You need a break, ${fails} poor grades.`);
    } else {
        console.log(`Average score: ${avgScore.toFixed(2)}`);
        console.log(`Number of problems: ${problemsCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}

examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])
    
    ;