const submitBtn = document.querySelector(".submit-btn");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");

submitBtn.onclick = () => {
  if (!isValid()) {
    emailInput.classList.add("input-error");
    errorMessage.classList.add("show");
  }
};

emailInput.onkeyup = (event) => {
  if (!isValid()) {
    emailInput.classList.add("input-error");
    errorMessage.style.display="block";
  } else {
    emailInput.classList.remove("input-error");
    errorMessage.style.display="none";
  }
};

emailInput.addEventListener("focusout", () => {
  console.log("focusout");
  if (!isValid()) {
    emailInput.classList.add("input-error");
    errorMessage.style.display="block";
  } else {
    emailInput.classList.remove("input-error");
    errorMessage.style.display="none";
  }
});

const eventHandler = () => {}

const isValid = () => {
  let emailValue = emailInput.value;
  if (emailValue) {
    return true;
  }
};

