function validate() {
    const emailInput = document.querySelector('#email');
    
    emailInput.addEventListener('change', () => {
        const path = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/g;

        if (!path.test(emailInput.value)) {
            emailInput.setAttribute('class', 'error');
        } else {
            emailInput.removeAttribute('class')
        }
        
    })
    
}