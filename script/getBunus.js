console.log("get Bunus ");

document.getElementById("bonus-btn").addEventListener("click", function () {
  const bonusInput = getValueFormInput("bunus-coupon");
  console.log(bonusInput);

  const currentBalance = getBalence();
  const BunusAmount = 100;

  const newBlance = currentBalance + Number(BunusAmount);

  if (bonusInput === "SKBP") {
    alert("consgralatun Bunus Added");
    setBalance(newBlance);

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
            <img src="../assets/wallet 1.png" alt="" />
            <div class="">
              <h2 class="text-xl font-semibold">Bonus</h2>
              ${BunusAmount} TK ${new Date().toLocaleString("en", {
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
    alert("Invalid Coupon");
    return;
  }
});
