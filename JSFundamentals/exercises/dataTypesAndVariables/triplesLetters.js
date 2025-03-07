function tripleLetters(num) {
    let letterOne = '';
    let letterTwo = '';
    let letterThree = '';
    for (let i = 1; i <= num; i++) {
      letterOne = String.fromCharCode(96 + i);
      for (let j = 1; j <= num; j++) {
        letterTwo = String.fromCharCode(96 + j)
        for (let k = 1; k <= num; k++){
          letterThree = String.fromCharCode(96 + k)
          console.log(letterOne + letterTwo + letterThree)
        }
      }
    }
  }