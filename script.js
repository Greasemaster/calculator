let operator;
let firstNumber;
let secondNumber;
let content = "";

const displayBox = document.querySelector("#display");
const btnNumbers = [...document.querySelectorAll(".number")];
const btnOperators = document.querySelectorAll(".operator");

const arrNumber = [];
const arrOperator = [];

for (let i = 0; i < btnOperators.length; i++) {
    btnOperators[i].addEventListener("click", () => {
        operator = btnOperators[i].textContent;
        displayContent(firstNumber, operator, secondNumber);
    });
}

for (let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener("click", () => {
        let numberValue = Number(btnNumbers[i].textContent);
        arrNumber.push(numberValue);
        if (arrNumber.length > 1) {
            firstNumber = arrNumber[0];
            secondNumber = arrNumber[1];
        } else {
            firstNumber = arrNumber[0];
        }
        displayContent(firstNumber, operator, secondNumber);
    });
}

const displayContent = (firstNumber, operator, secondNumber) => {
    content = ""; // Reset content to update display correctly
    if (firstNumber !== undefined) {
        content += `${firstNumber}`;
    }
    if (operator !== undefined && operator !== null) {
        content += ` ${operator}`;
    }
    if (secondNumber !== undefined) {
        content += ` ${secondNumber}`;
    }
    displayBox.textContent = content;
};

const equal = document.querySelector("#equal")
equal.addEventListener("click",() =>{
    displayBox.textContent = "";
    if (operator === "+"){
        displayBox.textContent = add(firstNumber,secondNumber)

    }
    else if (operator === "-"){
        displayBox.textContent = subtract(firstNumber,secondNumber)
    }
    else if (operator === "x"){
        displayBox.textContent = multiply(firstNumber,secondNumber)
    }
    else if (operator === "%"){
        displayBox.textContent = divide(firstNumber,secondNumber)
    }
})

const clear = document.querySelector("#clear")
clear.addEventListener("click", () =>{
    displayBox.textContent = ""
    arrNumber.splice(0,2)
    firstNumber = undefined
    secondNumber = undefined
    operator = ""
})
    


const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;



