// "use strict";

// function show(r, pi = 3.14) {
//   return pi * r * r;
// }
// document.querySelector("#result").innerHTML = show(2);

"use strict";

let result = document.querySelector("#result");
function sumNumber(num1 = 0, num2 = 1) {
  return num1 + num2;
}
result.innerHTML = sumNumber() + "<br>";
result.innerHTML += sumNumber(7) + "<br>";
result.innerHTML += sumNumber(5, 4) + "<br>";
