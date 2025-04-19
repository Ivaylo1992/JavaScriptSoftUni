function sortListOfNames(input) {
  const sortedList = input.sort((a, b) => a.localeCompare(b));
  const result = [];

  let count = 1;

  for (let name of sortedList) {
    result.push(`${count}.${name}`);
    count += 1;
  }

  return result.join("\n");
}

console.log(sortListOfNames(["John", "Bob", "Christina", "Ema"]));
