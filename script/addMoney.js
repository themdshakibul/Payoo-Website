document.getElementById("add-money-btn").addEventListener("click", function () {
  // step 1 --> Bank account gate
  const bankAccount = getValueFormInput("add-money-bnk");

  if (bankAccount == "Select bank") {
    alert("Please select a Bank");
    return;
  }

  // step 2 --> gate bank account Number
  const accno = getValueFormInput("add-money-number");

  if (accno.length != 11) {
    alert("Invalid Bank Account Number");
    return;
  }

  // step 3 --> get amount
  const amount = getValueFormInput("add-money-amount");

  const newBalence = getBalence() + Number(amount);
  console.log(newBalence);

  const pin = getValueFormInput("add-money-pin");

  if (pin == "1234") {
    alert(`Add mony Successfull form  
    ${bankAccount} 
    at ${new Date()}`);
    setBalance(newBalence);
  } else {
    alert("Invalid Pin");
    return;
  }
});
