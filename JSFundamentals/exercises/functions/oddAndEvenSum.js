function evenOddNumbers(initialNumber) {
    let numToStr = String(initialNumber);
    let result = [findOdds(numToStr), findEvens(numToStr)]
  
    return result.join(', ')
  
    function findEvens(numAsString) {
      let evenSum = 0;
      for (el of numAsString) {
        if (Number(el) % 2 === 0) {
          evenSum += Number(el);
        }
      }
  
      return `Even sum = ${evenSum}`
    }
  
     function findOdds(numAsString) {
      let oddSum = 0;
      for (el of numAsString) {
        if (Number(el) % 2 !== 0) {
          oddSum += Number(el);
        }
      }
      return `Odd sum = ${oddSum}`
    }
  }