function colorize() {
    let some = document.querySelectorAll('table tr');
    for (let i = 1; i < some.length; i += 2) {
        some[i].style.background = 'teal';
    }
    
}