function integerAndFloat(num1, num2, num3) {
    let numSum = num1 + num2 + num3;
    
    let sumType = numSum % 1 === 0 ? 'Integer' : 'Float';
    
    console.log(`${numSum} - ${sumType}`);
  }
  