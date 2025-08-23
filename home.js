/*log out*/
document.getElementById("log-out-btn").addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "./index.html";
});

/*add money*/

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

document.getElementById("add-money").addEventListener("click", () => {
  document.getElementById("add-money-div").style.display = "block";
  document.getElementById("cash-out-div").style.display = "none";
});

/*cash out*/

document
  .getElementById("widrw-money-btn")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const userNumber = document.getElementById("agent-number").value;
    const userWidrwAmount = document.getElementById("widrw-amount").value;
    const userPinNumber = document.getElementById("pin-to-widrw").value;

    let yourAmount = document.getElementById("your-amount").innerText;
    yourAmount = Number(yourAmount) - Number(userWidrwAmount);

    const pinNumber = 1234;

    if (userNumber === "") {
      return alert("plese enter agent number");
    }

    if (userWidrwAmount === "") {
      return alert("plese enter the amount you want to withdraw");
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

document.getElementById("cash-out").addEventListener("click", () => {
  document.getElementById("cash-out-div").style.display = "block";
  document.getElementById("add-money-div").style.display = "none";
});
