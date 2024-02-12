// Selected numbers and operator variables
let firstNumber = "";
let selectOperator = null;
let secondNumber = "";
let partialResult = null;
let secondOperator = null;

// Buttons nodes and use of DOM
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
// Equals and clear buttons
let equals = document.querySelector("#equals");
let clear = document.querySelector("#clear");
equals.addEventListener("click", () => calculate());
clear.addEventListener("click",() => {display.textContent = "";
                                      selectOperator = null;
                                      result.textContent = "Result: ";});

// Operations functions
function add(a,b){
    partialResult = a + b;
}

function subtrack(a,b){
    partialResult = a - b;
}

function multiply(a,b){
    partialResult = a * b;
}

function divide(a,b){
    partialResult = a / b;
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

// Function to select first number and second number
function displayNumber(input){
    input.forEach( number => {
        number.addEventListener("click",() => {
            display.textContent += number.textContent;
            if(selectOperator == null){
                firstNumber = display.textContent;
                firstNumber = parseInt(firstNumber);
            } else if (selectOperator !== null && partialResult == null){
                secondNumber += number.textContent;
                secondNumber = parseInt(secondNumber);
            }else if(partialResult !== null && firstNumber !== ""){
                firstNumber += number.textContent;
                firstNumber = parseInt(firstNumber);
            } else if(partialResult !== null && firstNumber == ""){
                firstNumber += number.textContent;
                firstNumber = parseInt(firstNumber);
            }
        })
    })
};

// Function to select operator
/*
function getOperator(){
    operators.forEach(operator => {
        operator.addEventListener("click",() => {
            if(selectOperator == null && secondNumber == "" && partialResult == null){ 
                display.textContent += operator.textContent;
                display.textContent = display.textContent.slice(0,-1); // First operator
            } else if (selectOperator !== null && secondNumber == "" && secondOperator == null){
                display.textContent = display.textContent.slice(0,-1);
                display.textContent += operator.textContent; // First operator change
            } else if(selectOperator !== null && secondNumber !== "" && partialResult == null){
                display.textContent += operator.textContent; // Second operator
                secondOperator = operator.textContent;
                varyCalculations(); 
            } else if(partialResult !== null && secondOperator !== null){
                display.textContent = display.textContent.slice(0,-1);
                display.textContent += operator.textContent; // Second operator change
                selectOperator = null;
                secondNumber = "";
                partialResult = null;
            }
            display.textContent += operator.textContent;
            selectOperator = operator.textContent;
        })
})
};
*/

function getOperator(){
    operators.forEach(operator => {
        operator.addEventListener("click",() => {
            if(selectOperator == null){ 
                display.textContent += operator.textContent;
                selectOperator = operator.textContent; // First operator
            } else if(firstNumber !== "" && secondNumber == ""){
                display.textContent = display.textContent.slice(0,-1);
                display.textContent += operator.textContent; // First operator change
            } else if (secondNumber !== "" && partialResult == null){
                display.textContent += operator.textContent;
                secondOperator = operator.textContent; // Second operator
                varyCalculations();
            } else if (secondNumber !== "" && partialResult !== null){
                display.textContent = display.textContent.slice(0,-1);
                display.textContent += operator.textContent; // Second operator change
                partialResult = null;
            } else if (secondNumber !== "" && partialResult == null){
                display.textContent += operator.textContent;
            }
        })
})
};
//Function return final calculate
function calculate() {
        if(secondOperator !== null){
        operate(firstNumber,secondNumber,selectOperator);
        result.textContent += partialResult;};
        secondNumber = "";
        partialResult = null;
    };

function varyCalculations (){
    if (secondNumber !== null){
        calculate();
    }
};

displayNumber(numbers);
getOperator();
//Create the functions that populate the display when you click the number buttons.♥
//You should be storing the ‘display value’ in a variable somewhere for use in the next step.♥

//You’ll need to store the first number and second number that are input into the calculator,♥
// utilize the operator that the user selects,♥
//and then operate() on the two numbers when the user presses the “=” key.♥

//Users should be able to string together several operations and get the right answer,
    // Calculate first two inputs value.♥
        //Calculate and assign second number when second operator is selected.
    // Calculate within click on equals button.
    // 
// with each pair of numbers being evaluated at a time.
// For example, 12 + 7 - 5 * 3 = should yield 42.