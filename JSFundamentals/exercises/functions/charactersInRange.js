function printAsciiValues(firstSymbol, secondSymbol) {
  
    return getSymbolsInRange(findIndexes(firstSymbol, secondSymbol))
    
    function findIndexes(symbolOne, symbolTwo) {
      let startNum;
      let endNum;
  
      
      if (symbolOne.charCodeAt() > symbolTwo.charCodeAt()) {
        endNum = symbolOne.charCodeAt();
        startNum = symbolTwo.charCodeAt();
      } else {
        endNum = symbolTwo.charCodeAt();
        startNum = symbolOne.charCodeAt();
      }
  
      return [startNum + 1, endNum - 1]
    }
    
    function getSymbolsInRange(rangeArr) {
      let rangeStart = rangeArr[0];
      let rangeEnd = rangeArr[1];
      let allSymbols = [];
      
      for (let i = rangeStart; i <= rangeEnd; i++) {
        allSymbols.push(String.fromCharCode(i))
      }
      
      return allSymbols.join(' ')
    }
    
  }