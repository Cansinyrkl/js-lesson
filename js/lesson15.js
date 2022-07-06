"use strict";

class person {
  constructor(p, p2, p3) {
    this.Name = p;
    this.age = p2;
    this.weight = p3;
  }
  get Name() {
    return this.Name;
  }
  get age() {
    return this.age;
  }
  get weight() {
    return this.weight;
  }

  set Name(name) {
    this.Name = name;
  }
  set age(age) {
    this.age = age;
  }
  set weight(weight) {
    this.weight = weight;
  }
}

var myObject = new person("ahmet", 31, 25);
$("#result").innerHTML =
  myObject.Name + "<br>" + myObject.Age + "<br>" + myObject.Weight + "<br>";

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
