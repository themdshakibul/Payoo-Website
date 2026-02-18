console.log("Loging js filt");

document.getElementById("loging-btn").addEventListener("click", function () {
  // 1- get the mobile number input
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;
  console.log(contactNumber);

  // 2 - get the pin input
  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;
  console.log(pin);

  // 3 match pin & mobile number
  if (contactNumber == "01234567890" && pin == "1234") {
    // 3.1 true --> alert--> homepage
    alert("loging successfull");
    // window.location.replace("../home.html");
    window.location.assign("../home.html");
  } else {
    // 3.2 true --> alert --> return
    alert("login Failed");
    return;
  }
});
