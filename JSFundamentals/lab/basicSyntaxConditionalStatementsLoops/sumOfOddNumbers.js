function sumOddNumbers(neededOddNums) {
    let oddNums = 1;
    let oddNumsSum = 1;
    let oddNum = 1;
    console.log(oddNum)
    
    while (oddNums < neededOddNums) {
      oddNum += 2;
      oddNumsSum += oddNum;
      oddNums ++;
      console.log(oddNum);
    }
    
    console.log(`Sum: ${oddNumsSum}`)
  }