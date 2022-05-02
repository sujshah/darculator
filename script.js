let DISPLAY_VALUE = "";
let FIRST_VALUE;
let SECOND_VALUE;
let OPERATOR;
let OPERATOR_BY_SYMBOL = {
    "+": add,
    "-": subtract,
    "x": multiply,
    "/": divide,
}

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
    );
}

function populateDisplay(event) {
    let key = event.target.textContent;
    if (!key) return;
    if (["+", "-", "/", "x"].includes(key)) {
        console.log(key);
        FIRST_VALUE = parseInt(DISPLAY_VALUE);
        OPERATOR = key;
        DISPLAY_VALUE += OPERATOR;
    }
    else if (key === "=") {
        SECOND_VALUE = parseInt(DISPLAY_VALUE.split(OPERATOR)[1]);
        DISPLAY_VALUE = OPERATOR_BY_SYMBOL[OPERATOR](FIRST_VALUE, SECOND_VALUE);
    }
    else {
        DISPLAY_VALUE += key;
    }
    outputDisplayValue();
}


getMouseClick();
