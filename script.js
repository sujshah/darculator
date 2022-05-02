let DISPLAY_VALUE = "";

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
        return undefined;
    }
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

function outputDisplayValue() {
    let element = document.querySelector('.display');
    element.textContent = DISPLAY_VALUE.toString();
}

function getMouseClick() {
    document.querySelectorAll('.button').forEach(
        element => element.addEventListener('click', populateDisplay)
    )
}

function populateDisplay(event) {
    let key = event.target.textContent;
    if (!key) return;
    DISPLAY_VALUE += key;
    outputDisplayValue();
}

getMouseClick();
