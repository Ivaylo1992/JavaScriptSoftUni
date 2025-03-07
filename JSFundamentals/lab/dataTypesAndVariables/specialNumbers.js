function specialNumber(num) {
    let specialNumberSums = [5, 7, 11]
    for (let i = 1; i <= num; i++){
      let sum = 0;
      let iAsStr = i.toString();
      for(let currentNum of iAsStr) {
        sum += Number(currentNum)
      }
      if (specialNumberSums.includes(sum)) {
        console.log(`${i} -> True`)
      } else {
        console.log(`${i} -> False`)
      }
    }
  }