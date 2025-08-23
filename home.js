document.getElementById("add-money-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const userBank = document.getElementById("bank").value;
  const useBankAcc = document.getElementById("bank-acc").value;
  const userAddAmount = document.getElementById("add-amount").value;
  const userPinNumber = document.getElementById("pin-number").value;

  let yourAmount = document.getElementById("your-amount").innerText;
  yourAmount = Number(yourAmount) + Number(userAddAmount);

  const pinNumber = 1234;

  if (userBank === "Select bank") {
    return alert("plese select a bank");
  }
  if (useBankAcc === "") {
    return alert("plese enter bank acc");
  }
  if (userAddAmount === "") {
    return alert("plese enter the amount you want to add");
  }
  if (userPinNumber === "") {
    return alert("plese enter the pin");
  }

  if (Number(userPinNumber) === pinNumber) {
    return (document.getElementById("your-amount").innerText = yourAmount);
  } else {
    return alert("enter valid pin");
  }
});
