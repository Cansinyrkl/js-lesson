var btn = document.querySelector("#Btn");
var getIndex = document.querySelector("#city");
var control = document.querySelector("#accept");
btn.addEventListener("click", function () {
  var valueSelected = getIndex.options[getIndex.selectedIndex].value;
  alert(valueSelected);
  if (!control.checked) {
    alert("please read privacy policy");
  }
});
