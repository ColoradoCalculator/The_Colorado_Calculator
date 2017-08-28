"use strict";

var numbersArray = document.getElementsByClassName("numbers");
// var btnOne = document.getElementById("one_btn");
// var btnOne = document.getElementById("btn_one");
// var btnOne = document.getElementById("btn_one");
// var btnOne = document.getElementById("btn_one");
// var btnOne = document.getElementById("btn_one");
// var btnOne = document.getElementById("btn_one");
// var btnOne = document.getElementById("btn_one");
// var btnOne = document.getElementById("btn_one");
// var btnOne = document.getElementById("btn_one");

console.log(numbersArray);
console.log(numbersArray[0]);
console.log(numbersArray[0].innerText);
console.log(numbersArray[0].innerHTML);

// var zero = numbersArray.pop();
// numbersArray.unshift(zero);
// console.log(numbersArray);
var first = document.getElementById("first_and_result");
first.innerText = "";
var someStuff = first.innerText;

function enterNumberFunction (i) {
return function() {
    someStuff += numbersArray[i].innerText;
    first.innerText = someStuff;
}
}

    // btnOne.addEventListener("click", enterNumberFunction);
for(var i=0; i< numbersArray.length; i++) {
    numbersArray[i].addEventListener("click", enterNumberFunction(i));
}




// first.innerText += numberToEnter;
// numbersArray.addEventListener("click", enterNumberFunction, false);