function numberInfo (num) {
    let sumNum = 0;
    let numToStr = String(num);
    let isSameNumber = true;
    let char = numToStr[0];

    for (let ch of numToStr) {
        if (!(ch === char)) {
            isSameNumber = false;
        }
        sumNum += Number(ch);
    }
    
    let result = [isSameNumber, sumNum];

    return result.join('\n')

}

console.log(numberInfo(2222222));
