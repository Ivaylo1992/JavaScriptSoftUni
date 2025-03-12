function equalSums(arr) {
    let sumLeft = 0;
    let sumRight = 0;
    let magicIndex = 'no';
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            sumLeft += arr[i - 1];
        }
        for (let k = i + 1; k < arr.length; k++) {
            sumRight += arr[k];
        }

        if (sumLeft === sumRight) {
            magicIndex = i;
            break;
        }
        sumRight = 0;
    }


    arr.length > 1 ? console.log(magicIndex) : console.log(0);
     
    
}

equalSums([1, 2, 3, 3]);