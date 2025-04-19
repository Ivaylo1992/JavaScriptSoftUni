function magicMatrices(matrix) {
  const magicSum = matrix[0].reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  for (let row = 0; row < matrix.length; row++) {
    let sumRow = 0;
    let sumCol = 0;

    for (let col = 0; col < matrix.length; col++) {
      sumRow += matrix[row][col];
      sumCol += matrix[col][row];
    }

    if (sumCol !== magicSum || sumRow !== magicSum) {
      return false;
    }
  }

  return true;
}

console.log(
  magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
);
