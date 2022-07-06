"use strict";
let result = document.querySelector("#result");
let langs = [
  "Javascript",
  "AngularJs",
  "React JS",
  "Vue JS",
  "Node JS",
  "PHP",
  "ASP.NET",
  "JSP",
  "ColdFusion",
  "HTML5",
  "CSS3",
];
let person = { firstName: "Ahmet", LastName: "canYRKL", age: 25 };
let { firstName, LastName, age } = person;

result.innerHTML = firstName + "<br>" + LastName + "<br>" + age;
