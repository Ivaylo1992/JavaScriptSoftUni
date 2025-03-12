function sumDigits(number) {
    let numberAsStr = String(number);
    let sum = 0;

    for (let num of numberAsStr) {
        sum += Number(num);
    }

    console.log(sum);
}

sumDigits(543);