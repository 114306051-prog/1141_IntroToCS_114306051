function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero!"; 
    }
    return a / b;
}

function calculate() {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operatorSelect = document.getElementById('operator');
    const resultDisplay = document.getElementById('resultDisplay');
    const calculateBtn = document.getElementById('calculateBtn'); // 取得按鈕以便更新文字
    
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operatorSelect.value;
    const operatorSymbol = operatorSelect.options[operatorSelect.selectedIndex].text; // 取得運算符號 (+, -, *, /)
    
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Error: Please enter valid numbers.";
        calculateBtn.textContent = "Calculate";
        return;
    }

    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        default:
            result = "Error: Invalid operation.";
    }

    if (typeof result === 'string') {
        resultDisplay.textContent = result;
    } else {
        resultDisplay.textContent = `Result = ${result.toFixed(2)}`;
    }
    
    calculateBtn.textContent = operatorSymbol === '+' ? 'Add' : 'Calculate';
}

function start() {
    const calculateBtn = document.getElementById('calculateBtn');
    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculate);
    } 
    
    const operatorSelect = document.getElementById('operator');
    operatorSelect.addEventListener('change', calculate);
    
    calculate(); 
}
window.addEventListener('load', start);