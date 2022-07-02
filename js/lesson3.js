go("#result", "https://www.google.com", 7);
function go(ID, address, second) {
  if (second === 0) {
    window.location.href = address;
  }
  document.querySelector(ID).textContent =
    second + " saniye sonra yönlendiriliceksiniz";
  second--;
  setTimeout(function () {
    go(ID, address, second);
  }, 1000);
}
