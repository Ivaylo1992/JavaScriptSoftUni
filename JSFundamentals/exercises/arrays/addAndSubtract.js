function addAndSubtract(arr) {
    let originalSum = 0;
    let newSum = 0;

    for (let index in arr) {
        let currentIndex = Number(index);
        originalSum += arr[currentIndex]
        if (arr[currentIndex] % 2 === 0) {
            arr[currentIndex] += currentIndex;
        } else {
            arr[currentIndex] -= currentIndex;
        }
        newSum += arr[currentIndex]
    }

    console.log(arr);
    console.log(originalSum);
    console.log(newSum);
    
    
}

addAndSubtract([5, 15, 23, 56, 35]);