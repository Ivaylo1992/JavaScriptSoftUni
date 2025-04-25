function validate() {
    const inputElement = document.querySelector('#email')
    const emailPath = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    inputElement.addEventListener('change', onFocus);

    function onFocus (event) {
        if (!emailPath.test(event.target.value)) {
            event.target.classList.add('error')
        } else {
            event.target.classList.remove('error')
        }
        
    }
    
    
}