function extract(content) {
    const path = /\(([^)]+)\)/g;
    const contentText = document.querySelector(`p#${content}`).textContent;
    const result = [];

    let match = path.exec(contentText);

    while (match) {
        result.push(match[1]);
        match = path.exec(contentText);
    }
    

    document.querySelector('p#result').textContent = result.join('; ')
    
    
}