document.getElementById("cashout-btn").addEventListener("click", function () {
  // 1 get the agent number & validate
  const cashoutNumber = getValueFormInput("cashout-number");

  if (cashoutNumber.length != 11) {
    alert("Invalid number");
    return;
  }

  // 2 get the amount, validate, convart to Number
  const cashoutAmount = getValueFormInput("cashout-amount");

  if (cashoutAmount < 0 || cashoutAmount.trim() === "") {
    alert("Amount Undefine");
    return;
  }

  //   // 3 get the Current Balance, validate, convart to Number
  //   const balanceElement = document.getElementById("balance");
  //   const balance = balanceElement.innerText;
  //   console.log(balance);

  const currentBalance = getBalence();

  // 4 Calculate new Balance
  const newBlance = currentBalance - Number(cashoutAmount);
  console.log(newBlance);

  if (newBlance < 0) {
    alert("Invalid Amount");
    return;
  }

  const cashoutPin = getValueFormInput("cashout-pin");

  if (cashoutPin == "1234") {
    alert("Cashout Successfull");
    // balanceElement.innerText = newBlance;
    // document.getElementById("balance").innerText = newBlance;
    setBalance(newBlance);
  } else {
    alert("Invalid Pin");
    return;
  }
});

// document.getElementById("cashout-btn").addEventListener("click", function () {
//   // 1 get the agent number & validate
//   const cashoutNumberInput = document.getElementById("cashout-number");
//   const cashoutNumber = cashoutNumberInput.value;
//   console.log(cashoutNumber);

//   if (cashoutNumber.length != "11") {
//     alert("Invalid Agent Number");
//     return;
//   }

//   // 2 get the amount, validate, convart to Number
//   const cashoutAmountInput = document.getElementById("cashout-amount");
//   const cashoutAmount = cashoutAmountInput.value;
//   console.log("cashoutAmount", cashoutAmount);

//   if (cashoutAmount < 0 || cashoutAmount.trim() === "") {
//     alert("Amount Undefine");
//     return;
//   }

//   // 3 get the Current Balance, validate, convart to Number
//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;
//   console.log(balance);

//   // 4 Calculate new Balance

//   const newBlance = Number(balance) - Number(cashoutAmount);

//   if (newBlance < 0) {
//     alert("Invalid Amount");
//     return;
//   }
//   // 5 Get the PI and verify

//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const cashoutPin = cashoutPinInput.value;
//   console.log(cashoutPin);

//   if (cashoutPin == "1234") {
//     // 5.1 true --> show and alert > set Balance
//     alert("Cashout Successfull");
//     console.log("New Balance", newBlance);
//     balanceElement.innerText = newBlance;
//   } else {
//     // 5.2 false --> show and error alert > return
//     alert("Invalid Pin");
//     return;
//   }
// });
