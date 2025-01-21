function pipesInPool(poolVolume, pipeOneDebitPerHour, pipeTwoDebitPerHour, fillingHours){
    let pipeOneLiters = pipeOneDebitPerHour * fillingHours;
    let pipeTwoLiters = pipeTwoDebitPerHour * fillingHours;

    let totalLiters = pipeOneLiters + pipeTwoLiters;

    let pipeOnePercentage = pipeOneLiters /totalLiters * 100;
    let pipeTwoPercentage =   pipeTwoLiters / totalLiters * 100;

    let diff = Math.abs(poolVolume - totalLiters)

    if (poolVolume >= totalLiters) {
        let poolFilledPercentage =  totalLiters / poolVolume* 100 ;
        console.log(
            `The pool is ${poolFilledPercentage.toFixed(2)}% full. Pipe 1: ${pipeOnePercentage.toFixed(2)}%. Pipe 2: ${pipeTwoPercentage.toFixed(2)}%.`
        );
    } else {
        console.log(`For ${fillingHours.toFixed(2)} hours the pool overflows with ${diff.toFixed(2)} liters.`);
        
    }

}

pipesInPool(100,
    100,
    100,
    2.5
    
    );