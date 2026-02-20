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
  const history = document.getElementById("history");
  const transformMoney = document.getElementById("transform-money");
  const getBonus = document.getElementById("get-bonus");
  const paybill = document.getElementById("pay-bill");

  // console.log(`addMoney - ${addmoney} , Cashout ${cashout}`);

  // shobaike hide kore dao
  addmoney.classList.add("hidden");
  cashout.classList.add("hidden");
  history.classList.add("hidden");
  transformMoney.classList.add("hidden");
  getBonus.classList.add("hidden");
  paybill.classList.add("hidden");

  // id wala element ta ke tumi show koro
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");

}
