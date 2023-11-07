const firstName = document.querySelector("#first-name");
let regexText = /^[a-zA-Z]+$/;

firstName.addEventListener("blur", (e) => {
  e.preventDefault();
  //   console.log(firstName.value);
  if (!regexText.test(firstName)) {
    firstName.style.border = "2px solid #D36369";
  } else {
    firstName.style.background = "white";
    firstName.style.remove.border;
  }
});
