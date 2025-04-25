function addItem() {
    // Fetch needed data
    const inputEl = document.getElementById('newItemText');
    const ulEl = document.getElementById('items');

    // Create, set value and attach to the ul
    const li = document.createElement('li');
    li.textContent = inputEl.value;

    // create the delete button
    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]'

    // Add event listener to the delete button
    deleteBtn.addEventListener('click', function () {
        li.remove()
    })
    
    // add new li element
    li.appendChild(deleteBtn)
    ulEl.appendChild(li);

    // clear the input
    inputEl.value = ''

   
}