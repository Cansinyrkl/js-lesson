"use strict";

let obj;

obj = { firstName: "Ahmet", lastName: "Yürekli", age: 5 };
obj.firstName = "Memo";
$("#result").innerHTML = obj.firstName;
