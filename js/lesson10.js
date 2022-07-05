// "use strict";
// //global const tüm heryere etki eder ama localdeki const kullanımında local constu kullanır
// const PI = 3.14;
// function areaCalculate() {
//   //local const değişkeni sadece burada etkilidir
//   const PI = 7;
//   document.querySelector("#result").innerHTML = PI + "<br>";
// }
// areaCalculate();
// document.querySelector("#result").innerHTML += PI;

"use strict";

//objeleri veya nesneleri sabit yapmak içindeki değerlerin değişmiceği
//veya ekleme yapılamıcağı anlamına gelimyor

const lang = { Name: "Javascript", type: "Ecmascript 6", year: "2015" };

lang.Name = "Node JS";

document.querySelector("#result").innerHTML = lang.Name + "<br>";
