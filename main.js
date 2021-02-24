const submitBtn = document.querySelector(".submit-btn");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");
const emailTemplate = document.querySelector(".label");

submitBtn.onclick = () => {
  if (isEmpty() || !isEmailValid()) {
    showErrorMessage();
  } else {
    alert("Registered..");
  }
};

emailInput.onfocus = () => {
  if (emailTemplate.style.display === "block") {
    hideEmailTemplate();
  }
};

emailInput.addEventListener("focusout", () => {
  if (isEmpty()) {
    showErrorMessage();
    showEmailTemplate();
  }
  if (!isEmailValid()) {
    showErrorMessage();
  }
});

emailInput.onkeyup = () => {
  if (!isEmailValid() || isEmpty()) {
    showErrorMessage();
  } else {
      removeErrorMessage();
      hideEmailTemplate();
  }
};

isEmpty = () => {
  return emailInput.value ? false : true;
};

isEmailValid = () => {
  let emailValue = emailInput.value;
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(emailValue).toLowerCase());
};

showErrorMessage = () => {
  emailInput.classList.add("input-error");
  errorMessage.style.display = "block";
};
removeErrorMessage = () => {
  emailInput.classList.remove("input-error");
  errorMessage.style.display = "none";
};

showEmailTemplate = () => {
  emailTemplate.style.display = "block";
};

hideEmailTemplate = () => {
  emailTemplate.style.display = "none";
};
