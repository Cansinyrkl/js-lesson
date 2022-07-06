"use strict";
let person = "Ahmetdul Cabbar";
let i;
//for in'nin kullanımı aşşağıdaki gibi

// for (i in person)
//  $("#result").innerHTML += person[i] + "<br>";

//for of için örnek ikiside aynıdır ama değişkenleri yazmana gerek kalmaz diğerinin içine atılımışdır

for (i of person) $("#result").innerHTML += i + "<br>";
