"use strict";

var numbersArray = document.getElementsByClassName("numbers");
console.log(numbersArray);
console.log(numbersArray[0]);
console.log(numbersArray[0].innerText);
console.log(numbersArray[0].innerHTML);

// var zero = numbersArray.pop();
// numbersArray.unshift(zero);
// console.log(numbersArray);
var first = document.getElementById("first_and_result");

function enterNumberFunction () {
    first.innerText += numbersArray[i].innerText
    // return function() {
    //     first.innerText += numbersArray[i].innerText;
    // }
}

for (var number = 0; number < numbersArray.length; number++) {
    numbersArray[number].addEventListener("click", enterNumberFunction, false)

};




// first.innerText += numberToEnter;
// numbersArray.addEventListener("click", enterNumberFunction, false);