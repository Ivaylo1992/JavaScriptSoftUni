function findDiagonalSums (matrix) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
        leftDiagonalSum += matrix[rowIdx][rowIdx];
        rightDiagonalSum += matrix[rowIdx][matrix.length - (rowIdx + 1)]
    }

    return `${leftDiagonalSum} ${rightDiagonalSum}`
}

console.log(findDiagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]));
