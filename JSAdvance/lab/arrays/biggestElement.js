function findBiggestElement(input) {
  let biggestElement = -Number.MAX_VALUE;

  for (let index in input) {
    let currentElement = Math.max(...input[index]);
    if (currentElement > biggestElement) {
      biggestElement = currentElement;
    }
  }

  return biggestElement;
}
