"use strict";

var numbersArray = document.getElementsByClassName("numbers");

// VARIABLES
var first = document.getElementById("first_and_result");
var operator = document.getElementById("operator");

var someStuff = "";
var clear = document.getElementById("clear");
var operators = document.getElementsByClassName("operators");


// NUMBER BUTTONS
function enterNumberFunction (i) {

    return function() {
    someStuff += numbersArray[i].innerText;
    first.innerText = someStuff;
    }

}

for(var i=0; i< numbersArray.length; i++) {
    numbersArray[i].addEventListener("click", enterNumberFunction(i));
}


// CLEAR BUTTON
function clearFunction() {
    first.innerText = "";
    someStuff = "";
}
clear.addEventListener("click", clearFunction);

// OPERATOR BUTTONS

function enterOperatorFunction (i) {

    return function () {
        operator.innerText = operators[i].innerText;
    }

};

for(var i=0; i< operators.length; i++) {
    operators[i].addEventListener("click", enterOperatorFunction(i));
}

// first.innerText += numberToEnter;
// numbersArray.addEventListener("click", enterNumberFunction, false);