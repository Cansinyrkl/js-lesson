// let leri ilk kullanıldığı yerde geçerlidir

"use strict";
let i = 7;
for (let i = 0; i < 5; i++) {
  document.querySelector("#result").innerHTML += "i: " + i + "<br>";
}
console.log("sonuç i:" + i);
