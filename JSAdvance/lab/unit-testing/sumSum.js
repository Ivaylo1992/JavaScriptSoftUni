function subSum(input, startIdx, endIdx) {
  if (!Array.isArray(input)) {
    return NaN;
  }

  const numList = input.map((x) => Number(x));

  startIdx = startIdx < 0 ? 0 : startIdx;
  endIdx = endIdx < numList.length ? endIdx : numList.length - 1;

  const slicedList = numList.slice(startIdx, endIdx + 1);

  return slicedList.reduce((acc, value) => acc + value, 0);
}

console.log(subSum([], 1, 2));
