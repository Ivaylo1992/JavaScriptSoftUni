function sorting (arr) {
    let firstSorting = arr.sort((a, b) => a - b);
    let secondSorting = [];
    
    while (firstSorting.length !== 0) {
        let firstNum = firstSorting.pop();
        let secondNum = firstSorting.shift();
        
        secondSorting.push(firstNum);
        secondSorting.push(secondNum);
    }

    console.log(secondSorting.join(' '));
}
