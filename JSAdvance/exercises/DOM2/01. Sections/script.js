function create(words) {
   const contentDiv = document.getElementById('content')

   const div = document.createElement('div');
   const p = document.createElement('p');

   for (let el of words) {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = el;
      p.style.display = 'none';

      div.appendChild(p);
      div.addEventListener('click', () => {
         p.style.display = 'block';
      });

      contentDiv.appendChild(div);
   }
   
   
}