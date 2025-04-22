function sumTable() {
    const tableElement = document.querySelectorAll('tbody tr td');
    let sum = 0;
    for (let i = 1; i < tableElement.length -2; i += 2) {
        sum += Number(tableElement[i].textContent)
    }

    const sumElement = document.querySelector('tbody tr td#sum');
    sumElement.textContent = sum;
    
    
}