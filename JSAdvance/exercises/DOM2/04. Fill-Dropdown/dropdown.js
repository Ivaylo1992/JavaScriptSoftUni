function addItem() {
    // Get the input
    const newItemText = document.querySelector('input#newItemText');
    const newItemValue = document.querySelector('input#newItemValue');
    
    // Create new option
    const optionItem = document.createElement('option');
    optionItem.textContent = newItemText.value;
    optionItem.value = newItemValue.value;

    // Get the menu
    const dropdownMenu = document.querySelector('#menu');
    dropdownMenu.appendChild(optionItem)
    
    // Clear inputs
    newItemText.value = ''
    newItemValue.value = ''

    // Focus to the first input
    newItemText.focus()
}