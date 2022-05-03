let DISPLAY_VALUE = "0";
let CURRENT_NUMBER;
let OPERATOR_SYMBOL;
let SET_FLOATING_POINT = false;
const PRECISION = 1e15;
const OPERATOR_BY_SYMBOL = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
}
let INFINITY_ANSWER = "lmao";

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
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

function outputDisplayValue() {
    let element = document.querySelector('.display');
    element.textContent = DISPLAY_VALUE.toString();
}

function processMouseClick() {
    document.querySelectorAll('.button').forEach(
        element => element.addEventListener('click', populateDisplay)
    );
    document.querySelector('.clear').addEventListener('click', clearDisplay)
}

function computeAnswer() {
    if (OPERATOR_SYMBOL === undefined) return DISPLAY_VALUE;
    const secondNumber = DISPLAY_VALUE.split(OPERATOR_SYMBOL).slice(-1)[0];
    if (secondNumber === "") return DISPLAY_VALUE;
    if (secondNumber === "0" && OPERATOR_SYMBOL === "/") {
        return "lmao";
    }
    const operator = OPERATOR_BY_SYMBOL[OPERATOR_SYMBOL]
    return Math.round(operate(operator, CURRENT_NUMBER, parseFloat(secondNumber))*PRECISION) / PRECISION;

}

function populateDisplay(event) {
    let value = event.target.textContent;
    if (DISPLAY_VALUE === INFINITY_ANSWER) {
        return;
    }
    if (Object.keys(OPERATOR_BY_SYMBOL).includes(value)) {
        if (!(OPERATOR_SYMBOL === undefined)) {
            DISPLAY_VALUE = computeAnswer();
        }
        CURRENT_NUMBER = parseFloat(DISPLAY_VALUE);
        OPERATOR_SYMBOL = value;
        DISPLAY_VALUE += OPERATOR_SYMBOL;
        resetFloatingPoint();
    }
    else if (value === "=") {
        DISPLAY_VALUE = computeAnswer();
        OPERATOR_SYMBOL = undefined;
        resetFloatingPoint();
    }
    else if (value === ".") {
        if (!SET_FLOATING_POINT) DISPLAY_VALUE += value;
        SET_FLOATING_POINT = true;
    }
    else {
        DISPLAY_VALUE = (DISPLAY_VALUE === "0") ? value: DISPLAY_VALUE + value;
    }
    outputDisplayValue();
}

function resetFloatingPoint() {
    SET_FLOATING_POINT = false;
}

function clearDisplay() {
    DISPLAY_VALUE = "0";
    CURRENT_NUMBER = OPERATOR_SYMBOL = undefined;
    resetFloatingPoint();
    outputDisplayValue();
}

processMouseClick();
