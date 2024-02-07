// Selected numbers and operator variables
let firstNumber = null;
let selectOperator = null;
let secondNumber = null;

// Operations functions
function add(a,b){
    result.textContent += (firstNumber + secondNumber);
}

function subtrack(a,b){
    result.textContent += (firstNumber - secondNumber);
}

function multiply(a,b){
    result.textContent += (firstNumber * secondNumber);
}

function divide(a,b){
    result.textContent += (firstNumber % secondNumber);
}

// Function operate
function operate(num1,num2,operator){
    switch(operator) {
        case "+":
            add(num1,num2);
            break;
        case "-":
            subtrack(num1,num2);
            break;
        case "X":
            multiply(num1,num2);
            break;
        case "%":
            divide(num1,num2);
            break;
    }
}

// Buttons nodes and use of DOM
//let operation = 0;
let display = document.createElement("div");
display.style.padding = "15px";
let calculator = document.querySelector("#calculator");
calculator.appendChild(display);
let numberButtons = document.querySelector("#numbersButtons");
calculator.appendChild(numberButtons);
let buttons = document.querySelectorAll("button");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operators");
let result = document.createElement("div");
result.style.padding = "10px";
result.textContent = "Result: "
calculator.appendChild(result);

// Function to select first number and second number
function displayNumber(input){
    input.forEach( number => {
        number.addEventListener("click",() => {
            display.textContent += number.textContent;
            if(selectOperator == null){
                firstNumber = display.textContent;
                firstNumber = parseInt(firstNumber);
            }
            else {
                secondNumber = display.textContent.slice(firstNumber.toString().length + 1);
                secondNumber = parseInt(secondNumber);
            }
        })
    })
}

displayNumber(numbers);

// Function to select operator
function getOperator(){
    operators.forEach(operator => {
        operator.addEventListener("click",() => {
            if(selectOperator !== null){
                display.textContent = display.textContent.slice(0,-1);
            }
            display.textContent += operator.textContent;
            selectOperator = operator.textContent;
        })
    })
};

getOperator();

function calculate() {
        operate(firstNumber,secondNumber,selectOperator);
    };

let equals = document.querySelector("#equals");
let clear = document.querySelector("#clear");
equals.addEventListener("click", () => calculate());
clear.addEventListener("click",() => {display.textContent = "";
                                      selectOperator = null;
                                      result.textContent = "Result: ";});


//Create the functions that populate the display when you click the number buttons.♥
//You should be storing the ‘display value’ in a variable somewhere for use in the next step.♥

//You’ll need to store the first number and second number that are input into the calculator,♥
// utilize the operator that the user selects,♥
//and then operate() on the two numbers when the user presses the “=” key.♥

//Users should be able to string together several operations and get the right answer,
// with each pair of numbers being evaluated at a time.
// For example, 12 + 7 - 5 * 3 = should yield 42.