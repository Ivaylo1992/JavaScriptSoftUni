function searchNumber (arrayOne, arrayTwo) {
    let elementsToTake = arrayTwo.shift();
    let elementsToDelete = arrayTwo.shift();
    let searchedNumber = arrayTwo.shift();

    let firstFilter = arrayOne.slice(0, elementsToTake);
    
    let secondFilter = firstFilter.slice(elementsToDelete, firstFilter.length);
    
    let count = 0;

    for (el of secondFilter) {
        if (el === searchedNumber) {
            count +=1;
        }
    }

    console.log(`Number ${searchedNumber} occurs ${count} times.`);
    
}

searchNumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]);