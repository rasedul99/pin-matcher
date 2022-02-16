function getPin() {
  let pin = Math.round(Math.random() * 10000);
  pin = pin + "";
  if (pin.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}
