function sumOfNumbers(text){
    let result = 0;

    for (let i = 0; i < text.length; i++){
        result += Number(text[i])
    }

    console.log(`The sum of the digits is:${result}`);
    
}

sumOfNumbers("564891");