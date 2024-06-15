// script.js
let display = document.getElementById('display');
let currentInput = '';
let resultDisplayed = false;

function appendNumber(number) {
    if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
    }
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (resultDisplayed) {
        resultDisplayed = false;
    }
    if (operator === '^') {
        currentInput += '**';
    } else {
        currentInput += ` ${operator} `;
    }
    updateDisplay();
}

function appendFunction(func) {
    if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
    }
    currentInput += ` ${func}(`;
    updateDisplay();
}

function appendDot() {
    if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
    }
    currentInput += '.';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.trim().slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = currentInput.replace(/√/g, 'Math.sqrt');
        let result = eval(currentInput);
        currentInput = result.toString();
        resultDisplayed = true;
        updateDisplay();
    } catch (e) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function calculateFactorial() {
    if (resultDisplayed) {
        resultDisplayed = false;
    }
    let num = parseInt(currentInput);
    if (isNaN(num)) {
        currentInput = 'Error';
    } else {
        currentInput = factorial(num).toString();
    }
    resultDisplayed = true;
    updateDisplay();
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function updateDisplay() {
    display.innerText = currentInput;
}
