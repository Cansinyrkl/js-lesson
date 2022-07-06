"use strict";

function* gen() {
  yield "Hello";
  yield "Javascript";
  yield "Ecmascript 6";
  return "Generators code";
}

for (let item of gen()) $("#result").innerHTML += item + "<br>";
