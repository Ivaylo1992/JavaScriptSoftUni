function sum(initial) {
    let total = initial;
  
    function inner(next) {
      total += next;
      return inner;
    }
  
    inner.toString = function () {
      return total;
    };
  
    return inner;
  }
  

console.log(sum(1)(6)(-3).toString());
