function addItem() {
    let textInput = document.getElementById('newItemText');
    let valueInput = document.getElementById('newItemValue');

    let newOption = document.createElement('option');
    newOption.textContent = textInput.value;
    newOption.value = valueInput.value;

    const selector = document.getElementById('menu')
    selector.appendChild(newOption);

    textInput.value = '';
    valueInput.value = '';
}