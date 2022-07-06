"use strict";

//Bu eski kullanımı

// function getFullName(firstName, lastName) {
//   $("#result").innerHTML = "Onun adı: " + firstName + " " + lastName;
// }
// getFullName("Ahmet Can", "Yürekli");

//Bu yeni kullanımı

function getFullName(x, y) {
  $("#result").innerHTML = `Sonuç: ${x * y}`;
}
getFullName(20, 15);
