alert("JavaScript Loaded!");
function getNumbers() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    return [a, b];
}

function add() {
    let [a, b] = getNumbers();
    document.getElementById("result").innerHTML = "Result: " + (a + b);
}

function subtract() {
    let [a, b] = getNumbers();
    document.getElementById("result").innerHTML = "Result: " + (a - b);
}

function multiply() {
    let [a, b] = getNumbers();
    document.getElementById("result").innerHTML = "Result: " + (a * b);
}

function divide() {
    let [a, b] = getNumbers();

    if (b === 0) {
        document.getElementById("result").innerHTML = "Cannot divide by zero";
    } else {
        document.getElementById("result").innerHTML = "Result: " + (a / b);
    }
}