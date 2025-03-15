function findPalindromes(numbers) {
    for (number of numbers) {
      if (number === reverseNumber(number)) {
        console.log('true')
      } else {
        console.log('false')
      }
    }
  
    function reverseNumber(numberToReverse) {
      return Number(String(numberToReverse).split('').reverse().join(''))
    }
  }