var outputCalculation = "0";
var outputResult = "0";

var firstNumber = "";
var result = 0.0;
var usedOperator = "";
var firstNumberAndOperator = "";

var hasUsedDecimalPoint = false;
var isLastActionOperator = false;

function inputNum(num) {
    checkCorrectInput();

    if (isLastActionOperator === true) {
        outputResult = "0";
    }

    if (outputCalculation === "0" && outputResult === "0") {
        outputCalculation = num;
        outputResult = num;
    } else if(outputCalculation !== "0" && outputResult === "0") {
        outputCalculation = firstNumberAndOperator + num;
        outputResult = num;
    } else {
        outputCalculation = outputCalculation + num;
        outputResult = outputResult + num;
    }

    isLastActionOperator = false;
    changeOutput();    
}

function inputOn() {
    outputCalculation = "0";
    outputResult = "0";
    changeOutput();
    isLastActionOperator = false;
    firstNumber = "";    
}

function changeOutput() {
    document.getElementById("calculation").innerHTML = outputCalculation;
    document.getElementById("calcOutput").innerHTML = outputResult; 
}

function inputPoint() {
    checkCorrectInput();

    if (hasUsedDecimalPoint === false) {
        if (isLastActionOperator === true) {
            outputCalculation = outputCalculation + "0";
            outputResult = "0";
        }
        outputCalculation = outputCalculation + ".";
        outputResult = outputResult + ".";
        hasUsedDecimalPoint = true;
        changeOutput();
        isLastActionOperator = false;
    }
}

function inputOperator(operator) {
    if (firstNumber === "" ) {
        firstNumber = outputResult;
        hasUsedDecimalPoint = false;
    } else if (usedOperator !== ""){
        getResult();
    }

    if (operator === "add") {
        outputCalculation = firstNumber + " + ";
    } else if (operator === "subtract") {
        outputCalculation = firstNumber + " - ";
    } else if (operator === "multiply") {
        outputCalculation = firstNumber + " x ";
    } else if (operator === "divide") {
        outputCalculation = firstNumber + " / ";
    }

    changeOutput();
    usedOperator = operator;
    isLastActionOperator = true;
    firstNumberAndOperator = outputCalculation;
}

function getResult() {
    if (!isLastActionOperator && firstNumber !== "") {
        secondNumber = outputResult;
        num1 = parseFloat(firstNumber);
        num2 = parseFloat(secondNumber);

        if (usedOperator === "add") {
            result = num1 + num2;
        } else if (usedOperator === "subtract") {
            result = num1 - num2;
        } else if (usedOperator === "multiply") {
            result = num1 * num2;
        } else if (usedOperator === "divide") {
            if (num2 !== 0.0) {
                result = num1 / num2;
            } else {
                result = 0.0
                outputCalculation = outputCalculation + " (not allowed)";
            }
        }
        //console.log(num1 + " " + usedOperator + " " + num2 + " = " + result);
        outputResult = result;
        firstNumber = result;
        usedOperator = "";
        changeOutput();        
        outputResult = result;
        hasUsedDecimalPoint = false;
    }
}

function checkCorrectInput() {
    if (firstNumber == outputResult && usedOperator === "") {
        outputCalculation = "0";
        outputResult = "0";
        firstNumber = "";
    }
}