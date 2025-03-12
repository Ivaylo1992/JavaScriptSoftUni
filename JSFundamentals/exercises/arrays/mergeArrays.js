function mergeArrays(arrOne, arrTwo) {
    let newArr = [];
    for (let i = 0; i < arrOne.length; i++) {
        let output;
        if (i % 2 === 0) {
            output = Number(arrOne[i]) + Number(arrTwo[i]);
        } else {
            output = arrOne[i] + arrTwo[i]
        }
        newArr.push(output)
    }
    console.log(newArr.join(' - '));
    
}

mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
    
    );