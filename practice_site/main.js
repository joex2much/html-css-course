let regexName = /^[a-zA-Z]+$/;
let regexEmail = /^.+@.+\..+$/;
let regexPhone = /^\d{10}$/;

var firstNameValid = false;
let lastNameValid = false;
let emailValid = false;
let phoneValid = false;

function formatPhoneNumber(phoneNumberString) {
  let cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  return "(" + match[1] + ") " + match[2] + "-" + match[3];
}

function unformatPhoneNumber(phoneNumberString) {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  return cleaned;
}

function toggleCreateAccount() {
  let createAccountValidArr = [
    firstNameValid,
    lastNameValid,
    emailValid,
    phoneValid,
  ];
  if (createAccountValidArr.every(Boolean)) {
    document.getElementById("create-account").disabled = false;
  } else {
    document.getElementById("create-account").disabled = true;
  }
}

// console.log(createAccount.value);

// function inputValidation(
//   inputId,
//   regexCheck,
//   errorId,
//   errorMessage,
//   inputValid
// ) {
//   const inputIdValue = document.getElementById(inputId);
//   inputIdValue.addEventListener("blur", (e) => {
//     e.preventDefault();
//     if (!regexCheck.test(inputIdValue.value)) {
//       inputIdValue.style.border = "2px solid #D36369";
//       document.getElementById(errorId).innerHTML = errorMessage;
//       toggleCreateAccount();
//       return (inputValid = false);
//     } else {
//       inputIdValue.style.border = "none";
//       document.getElementById("first-name-error").innerHTML = "";
//       toggleCreateAccount();
//       return (inputValid = true);
//     }
//   });
// }

// inputValidation(
//   "first-name",
//   regexName,
//   "first-name-error",
//   "Please Enter Valid First Name",
//   firstNameValid
// );

const firstName = document.getElementById("first-name");
firstName.addEventListener("blur", (e) => {
  e.preventDefault();
  //   console.log(firstName.value);
  if (!regexName.test(firstName.value)) {
    firstName.style.border = "2px solid #D36369";
    document.getElementById("first-name-error").innerHTML =
      "Please Enter Valid First Name";
    firstNameValid = false;
    toggleCreateAccount();
  } else {
    // firstName.style.background = "white";
    firstName.style.border = "none";
    document.getElementById("first-name-error").innerHTML = "";
    firstNameValid = true;
    toggleCreateAccount();
  }
});

const lastName = document.getElementById("last-name");
lastName.addEventListener("blur", (e) => {
  e.preventDefault();
  if (!regexName.test(lastName.value)) {
    lastName.style.border = "2px solid #D36369";
    document.getElementById("last-name-error").innerHTML =
      "Please Enter Valid Last Name";
    lastNameValid = false;
    toggleCreateAccount();
  } else {
    lastName.style.border = "none";
    document.getElementById("last-name-error").innerHTML = "";
    lastNameValid = true;
    toggleCreateAccount();
  }
});

const email = document.getElementById("email");
email.addEventListener("blur", (e) => {
  e.preventDefault();
  if (!regexEmail.test(email.value)) {
    email.style.border = "2px solid #D36369";
    document.getElementById("email-error").innerHTML =
      "Please Enter Valid Email";
    emailValid = false;
    toggleCreateAccount();
  } else {
    email.style.border = "none";
    document.getElementById("email-error").innerHTML = "";
    emailValid = true;
    toggleCreateAccount();
  }
});

const phone = document.getElementById("phone-number");
phone.addEventListener("blur", (e) => {
  e.preventDefault();
  //   console.log(firstName.value);
  if (!regexPhone.test(phone.value)) {
    phone.style.border = "2px solid #D36369";
    document.getElementById("phone-error").innerHTML =
      "Please Enter Valid Phone";
    phoneValid = false;
    toggleCreateAccount();
  } else {
    // firstName.style.background = "white";
    phone.value = formatPhoneNumber(phone.value);
    phone.style.border = "none";
    document.getElementById("phone-error").innerHTML = "";
    phoneValid = true;
    toggleCreateAccount();
  }
  phone.addEventListener("focus", (e) => {
    e.preventDefault;
    phone.value = unformatPhoneNumber(phone.value);
  });
});

document.getElementById("create-account").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("login").innerHTML =
    "<h2>Account Created!</h2><p>Thank you for joining us, we look forward to providing convenience.</p>";
});
