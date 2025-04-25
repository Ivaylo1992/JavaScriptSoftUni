function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');
    
    gradientElement.addEventListener('mousemove', function (event) {
        const mousePosition = event.offsetX
        const gradientWidth = event.target.clientWidth - 1 

        const percentage = Math.trunc((mousePosition / gradientWidth) * 100)

        resultElement.textContent = `${percentage}%`
        
    })
    
    gradientElement.addEventListener('mouseout', function(event) {
        resultElement.textContent = ''
    })
}