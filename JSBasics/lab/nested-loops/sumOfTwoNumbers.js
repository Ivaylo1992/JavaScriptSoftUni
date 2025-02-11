function sumOfTwoNumbers(startNum, endNum, targetNum) {
    let combinationCounter = 0;
    let result = 0;
    let isCombination = false;
    

    for (let i = startNum; i <= endNum; i++){
        for (let j = startNum; j <= endNum; j ++){
            combinationCounter += 1;
            result = i + j;
            if (result === targetNum) {
                isCombination = true;
                console.log(`Combination N:${combinationCounter} (${i} + ${j} = ${targetNum})`);
                break;
            }
        }
        if (isCombination){
            break;
        }
    }
    if (!isCombination){
        console.log(`${combinationCounter} combinations - neither equals ${targetNum}`);
        
    }
}

sumOfTwoNumbers(88, 
    888, 
    2000
    
    );