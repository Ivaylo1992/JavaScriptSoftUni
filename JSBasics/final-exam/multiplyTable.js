function multiplyTable(number){
    let numberToStr = String(number);
    
    let i = 0;

    let firstNum = Number(numberToStr[i]);
    i++;

    let secondNum = Number(numberToStr[i])
    i++;

    let thirdNum = Number(numberToStr[i])
    i++;

    for (let j = 1; j <= thirdNum; j++) {
        for (let k = 1; k <= secondNum; k++) {
            for (let l = 1; l <= firstNum; l++) {
                console.log(`${j} * ${k} * ${l} = ${j * k * l};`);
            }
        }
    }
    
}

multiplyTable(222);