"use strict";

var numbersArray = document.getElementsByClassName("numbers");
console.log(numbersArray);
console.log(numbersArray[0]);

// var zero = numbersArray.pop();
// numbersArray.unshift(zero);
// console.log(numbersArray);

var enterNumberFunction = function () {
    var first = document.getElementById("first_and_result");

    for (var i = 0; i < 10; i++) {
        if (i === numbersArray[i]) {
            first.innerText = i;
        }



    }
};



// number.addEventListener("click", enterNumberFunction, false);