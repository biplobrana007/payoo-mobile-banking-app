/*log out*/
document.getElementById("log-out-btn").addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "./index.html";
});

// get value function
function getValue(id) {
  return document.getElementById(id).value;
}
// get inner html function
function getInnerText(id) {
  return document.getElementById(id).innerText;
}

const pinNumber = 1234;
let transactionData = [];

// add to transaction
function addToTransaction(data) {
  const transactionContainer = document.getElementById("transaction-container");
  const div = document.createElement("div");
  div.innerHTML = `
       <div
          class=" bg-white border border-[#08080815] rounded-xl p-4 flex items-center justify-between"
        >
          <div class="flex items-center gap-3">
            <div class="bg-[#f4f5f7] p-[10px] rounded-[50%]">
              <img src="./Resources/assets/wallet1.png" alt="" />
            </div>
            <div class="">
              <h2 class="text-[16px] font-semibold text-[#08080896]">
                ${data.name}
              </h2>
              <p class="text-[12px] font-normal text-[#08080896]">
                ${data.date}
              </p>
            </div>
          </div>
          <i class="fa-solid fa-ellipsis-vertical text-[#08080896]"></i>
      </div>

`;
  transactionContainer.appendChild(div);
}

/*add money*/

document.getElementById("add-money-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const userBank = getValue("bank");
  const useBankAcc = getValue("bank-acc");
  const userAddAmount = getValue("add-amount");
  const userPinNumber = getValue("pin-number");

  let yourAmount = getInnerText("your-amount");
  yourAmount = Number(yourAmount) + Number(userAddAmount);

  const data = {
    name: "Add Money",
    date: new Date().toLocaleDateString(),
  };

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
    document.getElementById("your-amount").innerText = yourAmount;
    // addToTransaction(data);
    transactionData.push(data);
    return;
  } else {
    return alert("enter valid pin");
  }
});

/*cash out*/

document
  .getElementById("widrw-money-btn")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const userNumber = getValue("agent-number");
    const userWidrwAmount = getValue("widrw-amount");
    const userPinNumber = getValue("pin-to-widrw");

    let yourAmount = getInnerText("your-amount");
    yourAmount = Number(yourAmount) - Number(userWidrwAmount);

    const data = {
      name: "Cash Out",
      date: new Date().toLocaleDateString(),
    };

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
      document.getElementById("your-amount").innerText = yourAmount;
      // addToTransaction(data);
      transactionData.push(data);
      return;
    } else {
      return alert("enter valid pin");
    }
  });

// trnsaction

document.getElementById("transaction").addEventListener("click", () => {
  const transactionContainer = document.getElementById("transaction-container");
  for (const data of transactionData) {
    const div = document.createElement("div");
    div.innerHTML = `
         <div
            class=" bg-white border border-[#08080815] rounded-xl p-4 flex items-center justify-between"
          >
            <div class="flex items-center gap-3">
              <div class="bg-[#f4f5f7] p-[10px] rounded-[50%]">
                <img src="./Resources/assets/wallet1.png" alt="" />
              </div>
              <div class="">
                <h2 class="text-[16px] font-semibold text-[#08080896]">
                  ${data.name}
                </h2>
                <p class="text-[12px] font-normal text-[#08080896]">
                  ${data.date}
                </p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical text-[#08080896]"></i>
        </div>

  `;

    transactionContainer.appendChild(div);
    transactionData.length = 0;
  }
});

/* toggole*/

function btnToClick(btnId, formId) {
  const button = document.getElementById(btnId);
  const form = document.getElementById(formId);

  button.addEventListener("click", () => {
    const allFeature = document.querySelectorAll(".form");
    for (const feature of allFeature) {
      feature.style.display = "none";
    }

    const featureBtns = document.querySelectorAll(".featureBtn");
    for (const btn of featureBtns) {
      btn.classList.remove("border-red", "bg-gray-50");
      btn.classList.add("border-[hsla(0,0%,3%,.1)]");
    }

    form.style.display = "block";

    button.classList.add("border-[#ff77ee]", "bg-gray-50");

    button.classList.remove("border-[hsla(0,0%,3%,.1)]");
  });
}

btnToClick("add-money", "add-money-div");
btnToClick("cash-out", "cash-out-div");
btnToClick("transfer-money", "transfer-money-div");
btnToClick("get-bonus", "get-bonus-div");
btnToClick("pay-bill", "pay-bill-div");
btnToClick("transaction", "transaction-div");
