console.log("Payi bill added");

document.getElementById("pay-bill-btn").addEventListener("click", function () {
  const payBill = getValueFormInput("pay-bill-bnk");
  console.log(payBill);

  if (payBill == "Select bank") {
    alert("Please Select a Bank");
    return;
  }

  const billerAccount = getValueFormInput("pay-bill-number");
  if (billerAccount.length != 11) {
    alert("Biller Biller Account Number ");
    return;
  }

  const billAmount = getValueFormInput("pay-bill-amount");
  if (billAmount < 0 || billAmount.trim() === "") {
    alert("Amount Undefine");
    return;
  }

  const newBalence = getBalence() - Number(billAmount);
  console.log(newBalence);

  const billPin = getValueFormInput("pay-bill-pin");
  if (billPin == "1234") {
    alert("Paiy Bill Successfull");
    setBalance(newBalence);

    // 1 history container ke dhore niye asbo
    const history = document.getElementById("history-container");
    // 2 new div create korbo
    const newHistory = document.createElement("div");
    // 3 new div innerHtml add korbo
    newHistory.innerHTML = `
    <div
      class="transaction-card p-5 bg-base-300 rounded-md flex justify-between items-center gap-3"
      >
      <div class="flex gap-5 items-center">
        <img src="../assets/opt-5.png" alt="" class="bg-white p-2 rounded-full" />
          <div class="">
            <h2 class="text-xl font-semibold">Pay Bill</h2>
            ${billAmount} TK  ${payBill} Ac-No ${billerAccount} <br>
            ${new Date().toLocaleString("en", {
              weekday: "short",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
      </div>
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
    `;
    // 4 history container e newDiv append korbo
    history.append(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});
