function sumNumbers(input){
    let ceilNumber = input[0];
    let numberSum = 0;
    let i = 1;
    
    while (true){
        numberSum += Number(input[i]);
        if (numberSum >= ceilNumber){
            console.log(numberSum);
            break;
        }
        i++;
    }
}

sumNumbers(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"])
    
    