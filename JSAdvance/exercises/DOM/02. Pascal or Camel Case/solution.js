function solve() {
  const input = document.querySelector('form div input#text').value;
  const currentConvention = document.querySelector('form div input#naming-convention').value;
  const result = document.querySelector('div span#result');
  
  if (currentConvention === 'Pascal Case') {
    result.textContent = input
      .split(' ')
      .map((word) =>
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      ).join('')

  } else if (currentConvention === 'Camel Case') {
    result.textContent = input
      .split(' ')
      .map((word, index)=> 
          index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      ).join('')
  } else {
    result.textContent = 'Error!'
  }

  
}