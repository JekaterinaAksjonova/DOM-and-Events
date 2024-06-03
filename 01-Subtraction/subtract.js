function subtract() {
    let firstInput = document.getElementById('firstNumber');
    let secondInput = document.getElementById('secondNumber');

    let result = document.getElementById('result');

    result.textContent = Number(firstInput.value) - Number(secondInput.value);

} 