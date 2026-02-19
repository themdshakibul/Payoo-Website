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

  if (amount < 0 || amount.trim() === "") {
    alert("Amount Undefine");
    return;
  }

  const newBalence = getBalence() + Number(amount);
  console.log(newBalence);

  const pin = getValueFormInput("add-money-pin");

  if (pin == "1234") {
    alert(`Add mony Successfull form  
    ${bankAccount} 
    at ${new Date()}`);
    setBalance(newBalence);

    // 1 history container ke dhore niye asbo
    const history = document.getElementById("history-container");
    // 2 new div create korbo
    const newHistory = document.createElement("div");
    // 3 new div innerHtml add korbo
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
      Add mony Successfull form  
        ${bankAccount} , Acc-No  ${accno}  at  ${new Date().toLocaleString("en-GB", { weekday: "short", hour: "2-digit", minute: "2-digit" })}

    </div>
    
    `;
    // 4 history container e newDiv append korbo
    history.append(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});
