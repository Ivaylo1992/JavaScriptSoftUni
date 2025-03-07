function printAndSum(start, end) {
    let numString = '';
    let sumNum = 0;
    
    for (let i = start; i <= end; i++) {
      numString += i + ' ';
      sumNum += i;
    }
    
    console.log(numString);
    console.log(`Sum: ${sumNum}`);
  }