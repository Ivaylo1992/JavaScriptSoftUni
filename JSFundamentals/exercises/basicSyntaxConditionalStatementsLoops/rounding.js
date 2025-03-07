function rounding(num, precision) {
    let currentPrecision = Number(precision);
    
    if (currentPrecision > 15) {
      currentPrecision = 15;
    }
    
    let currentNum = num.toFixed(currentPrecision);
    
    let finalNum = parseFloat(currentNum);
    
    console.log(finalNum);
  }