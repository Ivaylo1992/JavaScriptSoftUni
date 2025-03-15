function calculate(a, b, c) {
  
    return subtract(sum(a, b), c)
    
    function sum(a, b) {
      return a + b;
    }
    
    function subtract(sumNum, c) {
      return sumNum - c;
    }
}