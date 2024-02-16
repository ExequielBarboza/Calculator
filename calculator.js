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
equals.addEventListener("click", () => {
    if(firstNumber === "" || secondNumber === ""){
        result.textContent = "Error. You should enter another number.";
    }
    else if (selectOperator !== null){
        firstOperation();
    } else if (selectOperator == null && secondOperator == null && partialResult == null){
        result.textContent = "Error. You should enter a operator.";
    } else if (secondOperator !== null){
        secondOperation();
    }
});
clear.addEventListener("click",() => {display.textContent = "";
                                       firstNumber = "";
                                       selectOperator = null;
                                       secondNumber = "";
                                       partialResult = null;
                                       secondOperator = null;

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
    if (a == 0 || b == 0){
        alert("Can't divide by 0");
        display.textContent = display.textContent.slice(0,-1);
        if(a == 0){
            a = "";
        }else if (b == 0){
            b = "";
        }
    } else {
        partialResult = a / b;
    }
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
            if(selectOperator == null && partialResult == null){
                firstNumber = display.textContent;
                firstNumber = parseFloat(firstNumber); // Select first number
            } else if (selectOperator !== null && partialResult == null){
                secondNumber += number.textContent;
                secondNumber = parseFloat(secondNumber); // Select second number
            } else if (partialResult !== null && firstNumber !== ""){
                secondNumber += number.textContent;
                secondNumber = parseFloat(secondNumber); // Select second number
            } else if(partialResult !== null && firstNumber == ""){
                firstNumber += number.textContent;
                firstNumber = parseFloat(firstNumber); // Select second number
            }
        })
    })
};

function getOperator(){
    operators.forEach(operator => {
        operator.addEventListener("click",() => {
            if(selectOperator == null && secondNumber === "" && secondOperator == null && firstNumber !== ""){
                display.textContent += operator.textContent;
                selectOperator = operator.textContent; // Only to select first operator
            } else if(selectOperator !== null && secondNumber === "" && secondOperator == null){
                display.textContent = display.textContent.slice(0,-1);
                display.textContent += operator.textContent;
                selectOperator = operator.textContent; // First operator change
            } else if (selectOperator !== null && secondNumber !== "" && secondOperator == null && firstNumber !== ""){
                display.textContent += operator.textContent;
                secondOperator = operator.textContent;
                firstOperation(); // Second operator change
            } else if (selectOperator !== null && secondNumber !== "" && secondOperator !== null && firstNumber !== ""){
                display.textContent = display.textContent.slice(0,-1);
                display.textContent += operator.textContent;
                secondOperator = operator.textContent;
                //firstOperation()
            } else if (selectOperator == null && secondNumber === "" && secondOperator !== null){
                display.textContent = display.textContent.slice(0,-1);
                display.textContent += operator.textContent;
                secondOperator = operator.textContent;
            } else if (selectOperator == null && secondNumber !== ""){
                display.textContent += operator.textContent;
                selectOperator = operator.textContent;
                secondOperation();
            }
        })
    })
};

//Function return final calculate
function firstOperation() {
            operate(firstNumber,secondNumber,selectOperator);
            if (partialResult % 1 !== 0){
                result.textContent = "Result: " + partialResult.toFixed(2);
            } else {
                result.textContent = "Result: " + partialResult;
            }
            firstNumber = partialResult;
            selectOperator = null;
            secondNumber = "";
}

function secondOperation(){
            operate(firstNumber,secondNumber,secondOperator);
            if(partialResult % 1 !== 0){
                result.textContent = "Result: " + partialResult.toFixed(2);
            } else {
                result.textContent = "Result: " + partialResult;
            }
            firstNumber = partialResult;
            secondOperator = null;
            secondNumber = "";
}

displayNumber(numbers);
getOperator();
