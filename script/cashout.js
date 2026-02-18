document.getElementById("cashout-btn").addEventListener("click", function () {
  // 1 get the agent number & validate
  const cashoutNumberInput = document.getElementById("cashout-number");
  const cashoutNumber = cashoutNumberInput.value;
  console.log(cashoutNumber);

  if (cashoutNumber.length != "11") {
    alert("Invalid Agent Number");
    return;
  }

  // 2 get the amount, validate, convart to Number
  const cashoutAmountInput = document.getElementById("cashout-amount");
  const cashoutAmount = cashoutAmountInput.value;
  console.log(cashoutAmount);

  // 3 get the Current Balance, validate, convart to Number
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log(balance);
  // 4 Calculate new Balance

  const newBlance = Number(balance) - Number(cashoutAmount);

  if (newBlance < 0) {
    alert("Invalid Amount");
    return;
  }
  // 5 Get the PI and verify

  const cashoutPinInput = document.getElementById("cashout-pin");
  const cashoutPin = cashoutPinInput.value;
  console.log(cashoutPin);

  if (cashoutPin == "1234") {
    // 5.1 true --> show and alert > set Balance
    alert("Cashout Successfull");
    console.log("New Balance", newBlance);
    balanceElement.innerText = newBlance;
  } else {
    // 5.2 false --> show and error alert > return
    alert("Invalid Pin");
    return;
  }
});
