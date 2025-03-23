function bombNumber(arr, bombInfo) {
    let bombNum = bombInfo.shift();
    let bombPower = bombInfo.shift();
    let idx = arr.indexOf(bombNum);
    let newArr = arr;

    while (idx !== -1) {
        let leftIdx = idx - bombPower > 0 ? idx - bombPower : 0;
        let rightIdx = idx + bombPower < newArr.length ? idx + bombPower: newArr.length;

        let leftSide = newArr.slice(0, leftIdx);
        let rightSide = newArr.slice(rightIdx + 1, newArr.length);

        newArr = leftSide.concat(rightSide)

        idx = newArr.indexOf(bombNum);
    }

    let sum = 0;

    for (let number of newArr) {
        sum += number;
    }

    console.log(sum);
    
}

bombNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]);