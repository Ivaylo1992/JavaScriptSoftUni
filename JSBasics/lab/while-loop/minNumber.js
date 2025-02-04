function minNumber(input){
    let i = 1;
    let minNumber = input[0];

    while (input[i] !== 'Stop'){
        let currentNum = Number(input[i])

        if (currentNum < minNumber){
            minNumber = currentNum
        }
        i++
    }
    console.log(minNumber);
    
}