"use strict";
let lang = ["Javascript", "Angular JS", "React JS", "Node Js", "Vue JS", "MySQL", "ORACLE"];
lang.forEach(function (par, index) {
  ++index;
  $("#result").innerHTML += index + ". Eleman" + par + "<br>";
});
