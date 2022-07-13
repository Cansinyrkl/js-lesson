"use strict";

let obj, i;

obj = {
  firstName: "ahmet",
  lastName: "Yürekli",
  age: 7,
};

for (i in obj) {
  $("#result").innerHTML = obj[i] + "<br>";
}
