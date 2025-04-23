function toggle() {
    const extraContent = document.getElementById('extra');
    const button = document.getElementsByClassName('button')[0];
    
    extraContent.style.display = extraContent.style.display === 'none'? 'block' : 'none' 
    button.textContent = extraContent.style.display === 'none' ? 'More' : 'Less';
}