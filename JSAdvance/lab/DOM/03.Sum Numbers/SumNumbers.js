function calc() {
    // TODO: sum = num1 + num2

    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');

    let sum = document.getElementById('sum');
    sum.value = Number(num1.value) + Number(num2.value)
    
    console.log(sum);
    
}
