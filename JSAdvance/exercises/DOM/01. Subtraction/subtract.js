function subtract() {
  let result = 0;

  const numOne = document.querySelector("div#wrapper input#firstNumber");
  const numTwo = document.querySelector("div#wrapper input#secondNumber");

  result += Number(numOne.value) - Number(numTwo.value);

  const finalResult = document.querySelector('div#wrapper div#result');
  finalResult.textContent = result;
}
