"use strict";

$("#result").innerHTML =
  Number.isFinite("7") +
  "<br>" +
  Number.isFinite(7) +
  "<br>" +
  Number.isFinite(3.14) +
  "<br>" +
  Number.isFinite("Ecmascript") +
  "<br>" +
  Number.isFinite(true) +
  "<br>" +
  Number.isFinite(NaN) +
  "<br>";
