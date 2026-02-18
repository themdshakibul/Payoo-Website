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
