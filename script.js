const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    if (b === 0) {
        return undefined;
    }
    return a / b;
};

console.log(divide(1,3));
console.log(multiply(1.1213,21312));
console.log(subtract(12.312,1412));
console.log(add(1213,0.3));

const operate = function(operator, a, b) {
    return operator(a, b);
}

