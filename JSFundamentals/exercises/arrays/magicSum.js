function magicSum(arr, magicSum) {
    for (let i = 0; i < arr.length; i++) {
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[i] + arr[k] === magicSum) {
                console.log(`${arr[i]} ${arr[k]}`)
            }
        }
    }
}

magicSum([1, 2, 3, 4, 5, 6],6);