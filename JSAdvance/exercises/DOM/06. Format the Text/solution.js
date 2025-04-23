function solve() {
  const textInput = document.querySelector('textarea#input').value;
  const output = document.querySelector('#output');
  output.innerHTML = '';
  
  const sentences = textInput.split('.').map(s => s.trim()).filter(s => s.length > 0);
  let result = [];

  for (let i = 0; i < sentences.length; i+= 3) {
    let part = sentences.slice(i, i + 3).join('. ') + '.';
    result.push(`<p>${part}</p>`)
  }

  output.innerHTML = result.join('')

} 

