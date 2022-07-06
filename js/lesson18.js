"use strict";
//Spread Operator

function sum(x, y, z) {
  return x + y + z;
}

let numbers = [5, 5, 9];
$("#result").innerHTML = sum(...numbers);
