var ID,
  Btn,
  resultFalse,
  resultTrue,
  odd = 0,
  even = 0,
  result,
  i,
  j,
  z,
  tcTotal;
ID = document.querySelector("#tc");
resultFalse = document.querySelector("#resultFalse");
resultTrue = document.querySelector("#resultTrue");
Btn = document.querySelector("#Btn");

Btn.addEventListener("click", function () {
  for (i = 0; i < 9; i += 2) {
    odd += Number(ID.value[i]);
  }
  odd *= 7;
  for (j = 1; j < 8; j += 2) {
    even += Number(ID.value[j]);
  }
  for (z = 0; z < 10; z++) {
    tcTotal += Number(ID.value[z]);
  }
  result = Math.abs(odd - even);
  resultFalse.style.display = "block";
  resultTrue.style.display = "none";
  if (ID.value == "") {
    resultFalse.textContent = "Kimlik numarası boş bırakılamaz";
  } else if (ID.value.length !== 11) {
    resultFalse.textContent = "Kimlik Numarası 11 haneli olmak zorundadır";
  } else if (isNaN(ID.value)) {
    resultFalse.textContent = "kimlik numarası sayılardan oluşmak zorundadır";
  } else if (ID.value[0] == 0) {
    resultFalse.textContent = "kimlik numarasının ilk rakamı sıfır olamaz";
  } else if (result % 10 != Number(ID.value[9])) {
    resultFalse.textContent =
      "Girilen kimlik numarası gerçek bir şahsa ait değildir";
  } else if (tcTotal % 10 != Number(ID.value[10])) {
    resultFalse.textContent =
      "Girilen kimlik numarası gerçek bir şahsa ait değildir";
  } else {
    resultFalse.style.display = "none";
    resultTrue.style.display = "block";
    resultTrue.textContent = "Girilen Kimlik numarası sorunsuzdur";
  }
});
