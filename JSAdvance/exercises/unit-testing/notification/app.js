function notify(message) {
  const divElement = document.querySelector('#notification');
  divElement.style.display = 'block';
  divElement.textContent = message;
  
  divElement.addEventListener('click', () => {
    divElement.style.display = 'none'
  })
}