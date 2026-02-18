console.log("Machine Added");

// Machine id --> input value
function getValueFormInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(value);
  return value;
}

// Machine --> Balance
function getBalence() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log("Current Balance", Number(balance));
  return Number(balance);
}

// Machine value --> set Balance
function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

// mechine id -> hidden all -> show all
function showOnly(id) {
  const addmoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");
  // console.log(`addMoney - ${addmoney} , Cashout ${cashout}`);

  // shobaike hide kore dao
  addmoney.classList.add("hidden");
  cashout.classList.add("hidden");

  // id wala element ta ke tumi show koro
  const addmoneyH = document.getElementById(id);
  addmoneyH.classList.remove("hidden");

  const cashoutH = document.getElementById(id);
  cashoutH.classList.remove("hidden");
}
