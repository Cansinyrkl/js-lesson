"use strict";

//promise

let show1 = new Promise(function (success, reject) {
  setTimeout(function () {
    success("İşlem Başarılı oldu");
  }, 2000);
});
let show2 = new Promise(function (success, reject) {
  setTimeout(function () {
    reject("İşlem Başarısız oldu");
  }, 1000);
});
Promise.race([show1, show2]).then(function success(par) {
  $("#result").innerHTML = par;
});
Promise.race([show1, show2]).then(function reject(par) {
  $("#result").innerHTML = par;
});
