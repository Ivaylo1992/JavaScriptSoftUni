function walking(input){
    let goalSteps = 10000;

    let i = 0;
    let hasReachedSteps = false;
    let steps = 0;

    let command = input[i];
    i++;

    while (true){
        if (command === 'Going home'){
            steps += Number(input[i]);
            hasReachedSteps = steps >= goalSteps ? true : false;
            break;
        } else {
            steps += Number(command)
            if (steps >= goalSteps){
                hasReachedSteps = true;
                break;
            }
        }
        
        command = input[i];
        i++;
    }

    let stepsDiff = Math.abs(steps - goalSteps)

    switch (hasReachedSteps){
        case true: 
            console.log(`Goal reached! Good job!`);
            console.log(`${stepsDiff} steps over the goal!`);
            break;
        case false: 
            console.log(`${stepsDiff} more steps to reach goal.`);
    }
}

walking(["125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"])
    
    
    
    ;