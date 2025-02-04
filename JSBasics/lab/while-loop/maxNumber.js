function maxNumber(input){
    let i = 1;
    let maxNum = Number(input[0]);

    while (input[i] !== 'Stop'){
        if (Number(input[i]) > maxNum){
            maxNum = Number(input[i])
        }
        i++
    }

    console.log(maxNum);

    
}

maxNumber(["-1",
    "-2",
    "Stop"])
    
    
    
    