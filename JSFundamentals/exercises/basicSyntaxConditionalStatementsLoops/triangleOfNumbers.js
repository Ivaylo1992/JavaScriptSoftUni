function triangleN(n) {
    let numStr = '';
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++){
        numStr += i + ' ';
      }
      console.log(numStr);
      numStr = '';
    }
  }