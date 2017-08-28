"use strict";

var buttonsArray = document.getElementsByClassName("buttons");

// VARIABLES
var first = document.getElementById("first_and_result");
var operator = document.getElementById("operator");
var secondField = document.getElementById("second_number");
var someStuff = "";
var someOtherStuff = "";
var clear = document.getElementById("clear");
var operators = document.getElementsByClassName("operators");
var equals = document.getElementById("equals");

// NUMBER BUTTONS
function enterNumberFunction (event) {
    if (isOperatorBtn(event.target) && first.value.length > 0) {
        operator.value = event.target.innerText;

    } else if (operator.value.length > 0 && (isOperatorBtn(event.target) == false)) {
        someOtherStuff += event.target.innerText;
        secondField.value = someOtherStuff;
    }else if ((isOperatorBtn(event.target)==false)){
        someStuff += event.target.innerText;
        first.value = someStuff;

    }
}

for (var i = 0; i < buttonsArray.length; i++) {
            buttonsArray[i].addEventListener("click", enterNumberFunction);
        }



// CLEAR BUTTON
function clearFunction() {
    first.value = "";
    someStuff = "";
    operator.value = "";
    secondField.value = "";
    someOtherStuff = "";
}
clear.addEventListener("click", clearFunction);


function equalsFunction(){
    if(first.value.indexOf(".")==first.value.lastIndexOf(".") && secondField.value.indexOf(".")==secondField.value.lastIndexOf(".")) {
        var firstOperand = parseFloat(first.value);
        var secondOperand = parseFloat(secondField.value);
        switch (operator.value) {
            case "+":
                first.value = firstOperand + secondOperand;

                break;
            case "-":
                first.value = firstOperand - secondOperand;

                break;
            case "*":
                first.value = firstOperand * secondOperand;

                break;
            case "/":
                if (secondOperand == 0) {
                    alert("cannot divide by zero!");
                    break;
                }
                first.value = firstOperand / secondOperand;

                break;
        }

        secondField.value = "";
        someOtherStuff = "";
    }else{
        alert("Too many '.' characters!")
    }

}

equals.addEventListener("click", equalsFunction);

// OPERATOR BUTTONS


// function enterOperatorFunction (i) {
//
//     return function () {
//         operatorFunctionVariable = operator.innerText;
//         operatorFunctionVariable += operators[i].innerText;
//         operator.innerText = operatorFunctionVariable;
//
//     }
//
//
// }
//
// for(i=0; i< operators.length; i++) {
//     operators[i].addEventListener("click", enterOperatorFunction(i), false);
// }
function isOperatorBtn (buttonToTest) {
    return (buttonToTest.className.split(" ").indexOf("operators") > -1 ? true : false);
}

// for(var i=0; i< operators.length; i++) {
//     (function(index) {
//         operators[index].addEventListener("click", function() {
//             haveIEnteredSomething = true;
//         })
//     })(i);
// }