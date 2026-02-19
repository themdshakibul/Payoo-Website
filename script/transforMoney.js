document.getElementById("transfor-btn").addEventListener("click", function () {
  const transforNumber = getValueFormInput("number-money-transfor");
  if (transforNumber.length != 11) {
    alert("Invalid Ac-No");
    return;
  }

  const amountTransfor = getValueFormInput("amonunt-transfor");
  if (amountTransfor.trim() === "") {
    alert("Amount Undefine");
    return;
  }

  const currentBalanceAmount = getBalence();
  const newBalence = currentBalanceAmount - Number(amountTransfor);
  console.log(newBalence);
  if (newBalence < 0) {
    alert("Amount Invalid");
    return;
  }

  const transforPin = getValueFormInput("transfor-pin");
  if (transforPin == "1234") {
    alert("Transform Successfull");
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
      <img src="../assets/wallet 1.png" alt="" />
      <div>
        <h2 class="text-xl font-semibold">Transfor Money</h2>
          ${amountTransfor} TK Ac-No ${transforNumber} <br>
          ${new Date().toLocaleString("en", {
            weekday: "short",
            hour: "2-digit",
            minute: "2-digit",
          })}
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
