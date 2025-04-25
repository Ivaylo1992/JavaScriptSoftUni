function focused() {
    const inputElements = Array.from(document.querySelectorAll('input'));

    inputElements.forEach(input => {
        input.addEventListener('focus', (e) => {
            e.target.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', (e) => {
            e.target.parentElement.classList.remove('focused');
        });
    });
}
