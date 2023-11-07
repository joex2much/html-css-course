const firstName = document.querySelector("#first-name");
let regexName = /^[a-zA-Z]+$/;
let regexEmail = /^.+@.+\..+$/;

firstName.addEventListener("blur", (e) => {
  e.preventDefault();
  //   console.log(firstName.value);
  if (!regexName.test(firstName.value)) {
    firstName.style.border = "2px solid #D36369";
  } else {
    // firstName.style.background = "white";
    firstName.style.border = "none";
  }
});

const lastName = document.querySelector("#last-name");

lastName.addEventListener("blur", (e) => {
  e.preventDefault();
  //   console.log(firstName.value);
  if (!regexName.test(lastName.value)) {
    lastName.style.border = "2px solid #D36369";
  } else {
    // firstName.style.background = "white";
    lastName.style.border = "none";
  }
});

const email = document.querySelector("#email");

email.addEventListener("blur", (e) => {
  e.preventDefault();
  //   console.log(firstName.value);
  if (!regexEmail.test(email.value)) {
    email.style.border = "2px solid #D36369";
  } else {
    // firstName.style.background = "white";
    email.style.border = "none";
  }
});
