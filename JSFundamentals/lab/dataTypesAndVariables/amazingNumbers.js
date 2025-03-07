function amazingNum(num) {
    let sum = 0;
    let numAsStr = num.toString();
    
    for (let currentNum of numAsStr) {
      sum += Number(currentNum);
    }
    
    let sumAsStr = sum.toString()
    
    console.log(`${num} Amazing? ${sumAsStr.includes(9) ? 'True' : 'False'}`)
    
  }