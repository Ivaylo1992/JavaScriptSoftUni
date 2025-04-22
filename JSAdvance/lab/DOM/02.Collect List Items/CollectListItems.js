function extractText() {
    const elements = document.querySelectorAll('li');
    const elementsList = Array.from(elements); 
    
    let result = document.querySelectorAll('#result')[0];

    for (let el of elementsList) {
        result.textContent += el.textContent + '\n'
    }
    
}