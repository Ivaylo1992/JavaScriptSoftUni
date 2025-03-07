function division(num, precision) {
    let divisionNumbers = [2, 3, 6, 7, 10];
    let biggestDivision = 0;
    
    for (let i = 0; i < divisionNumbers.length; i++) {
      if (num % divisionNumbers[i] === 0) {
        biggestDivision = divisionNumbers[i];
      }
    }
    
    if (biggestDivision === 0) {
      console.log('Not divisible')
    } else {
      console.log(`The number is divisible by ${biggestDivision}`)
    }
    
  }