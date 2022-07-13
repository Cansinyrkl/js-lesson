"use strict";

let obj, Json, txt, storegeObj;
obj = { firstName: "Ahmet", lastName: "Yürekli" };
Json = JSON.stringify(obj);
localStorage.setItem("storegeJSON", Json);
txt = localStorage.getItem("storegeJSON");
storegeObj = JSON.parse(txt);
//JSON.parse ile Json'ları Javascrit nesnesine çevirmek için kullalnılır

// obj = JSON.parse(takeJSON);

// stringify metodu ile JSON'ları birer objeye çevire biliriz.

// sendJSON = JSON.stringify(obj);

$("#result").innerHTML = storegeObj.firstName + "<br>" + obj.lastName;
