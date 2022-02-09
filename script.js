// const { clear } = require("console");

let number1 = 0;
let ans = 0;
let operator = "+";
let shouldreset = true;
let enabledot = true;
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const equalButton = document.getElementById("equals")
const screen = document.getElementById("number");
const numbers = document.querySelectorAll(".number");
const ac = document.querySelector("#ac");
const percent = document.querySelector("#percentage");
const back = document.querySelector("#backspace");
window.addEventListener('keydown', handleKeyboardInput);
addButton.addEventListener('click', () => { operatorClicked("+") });
subtractButton.addEventListener('click', () => { operatorClicked("-") });
multiplyButton.addEventListener('click', () => { operatorClicked("*") });
divideButton.addEventListener('click', () => { operatorClicked("/") });
equalButton.addEventListener('click', () => { showAnswer() });
ac.addEventListener('click', () => { clear() });
percent.addEventListener('click', () => { calcpercent() });
back.addEventListener('click', () => { backspace() });
numbers.forEach((num) => num.addEventListener('click', () => numberclicked(num.textContent)));


function backspace() {
    screen.textContent -= (screen.textContent % 10);
    screen.textContent /= 10;
    if (screen.textContent == 0) {
        shouldreset = true;
    }
}


function calcpercent() {
    if (enabledot == true) {
        screen.textContent = screen.textContent / 100;
        enabledot = false;
    } else {
        return;
    }
}

function clear() {
    console.log("Inside clear");
    let number1 = 0;
    let ans = 0;
    let operator = "+";
    let shouldreset = true;
    screen.textContent = 0
    enabledot = true;
}

function showAnswer() {
    number1 = Number(screen.textContent);
    evaluate();
    // console.log(showAnswer);
    operator = "+";
    screen.textContent = ans;
    number1 = 0;
    ans = 0;
    shouldreset = true;
    enabledot = true;
}

function numberclicked(num) {
    if (num == '.') {
        if (enabledot == false) {
            return;
        }
        enabledot = false;
    }
    if (shouldreset == true) {
        screen.textContent = num;
        shouldreset = false;
    } else {
        console.log(num);
        screen.textContent = screen.textContent + num;
        shouldreset = false;
    }
}



function operatorClicked(operation) {
    number1 = Number(screen.textContent);
    evaluate();
    operator = operation;
    shouldreset = true;
    enabledot = true;
}

function evaluate() {
    if (operator == "+") {
        add();
    }
    else if (operator == "-") {
        subtract();
    } else if (operator == "*") {
        multiply();
    } else if (operator == "/") {
        divide();
    }
}

function add() {
    ans = number1 + ans;
}
function subtract() {
    ans = ans - number1;
}
function multiply() {
    ans = ans * number1;
}
function divide() {
    if (number1 == 0) {
        clear();
        alert("😒😒😒😒😒")

    } else {
        ans = ans / number1;
    }
}

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) numberclicked(e.key)
    if (e.key === '.') numberclicked(e.key)
    if (e.key === '=' || e.key === 'Enter') showAnswer()
    if (e.key === 'Backspace') backspace()
    if (e.key === 'Escape') clear()
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
        operatorClicked(e.key)
}






