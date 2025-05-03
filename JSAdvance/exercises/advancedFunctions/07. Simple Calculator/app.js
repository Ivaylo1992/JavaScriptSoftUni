function calculator() {
  const calc = {
    init: function (selector1, selector2, resultSelector) {
      this.numOne = document.querySelector(selector1);
      this.numTwo = document.querySelector(selector2);
      this.result = document.querySelector(resultSelector);
    },
    add: function () {
      this.result.value = Number(this.numOne.value) + Number(this.numTwo.value);
    },
    subtract: function () {
      this.result.value = Number(this.numOne.value) - Number(this.numTwo.value);

    },
  };

  return calc;
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
