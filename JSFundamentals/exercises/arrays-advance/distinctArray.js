function distinctArray (arr) {
    let arrSet = new Set(arr);
    let newArr = Array.from(arrSet);

    return newArr.join(' ')
}

console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));




