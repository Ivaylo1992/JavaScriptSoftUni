function maxNumber(arr) {
    let topNumbers = [];
    for (let i = 0; i < arr.length; i++){
        let num = arr[i];
        let isTop = true;
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[k] >= num){
                isTop = false;
                break;
            }
                
        }
        if (isTop) {
            topNumbers.push(num)
        }
    }
    console.log(topNumbers.join(' '));
}

maxNumber([1, 4, 3, 2]);