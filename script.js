document.getElementById("login-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const phoneNumber = 123456789;
  const pinNumber = 1234;
  const userPhoneNumber = parseInt(
    document.getElementById("mobile-number").value
  );
  const userPinNumber = parseInt(document.getElementById("pin-number").value);
  if (userPhoneNumber === phoneNumber && userPinNumber === pinNumber) {
    window.location.href = "./home.html";
  } else {
    console.log("not matched");
  }
});
