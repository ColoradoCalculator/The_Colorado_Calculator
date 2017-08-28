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
function enterNumberFunction (i) {
    first.innerText += numbersArray[i].innerText
    // return function() {
    //     first.innerText += numbersArray[i].innerText;
    // }
}




    numbersArray.addEventListener("click", enterNumberFunction() );

// first.innerText += numberToEnter;




// numbersArray.addEventListener("click", enterNumberFunction, false);