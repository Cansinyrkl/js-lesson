"use strict";

class person {
  constructor(p, p2, p3) {
    this.Name = p;
    this.age = p2;
    this.weight = p3;
  }
  getName() {
    return this.Name;
  }
  getage() {
    return this.age;
  }
  getweight() {
    return this.weight;
  }

  setName(name) {
    this.Name = name;
  }
  setage(age) {
    this.age = age;
  }
  setweight(weight) {
    this.weight = weight;
  }
}

var myObject = new person("ahmet", 31, 25);
$("#result").innerHTML =
  myObject.getName() +
  "<br>" +
  myObject.getage() +
  "<br>" +
  myObject.getweight() +
  "<br>";
myObject.setName("Babo") +
  "<br>" +
  myObject.setage(10) +
  "<br>" +
  myObject.setweight(15) +
  "<br>";
$("#result").innerHTML +=
  myObject.getName() +
  "<br>" +
  myObject.getage() +
  "<br>" +
  myObject.getweight() +
  "<br>";
