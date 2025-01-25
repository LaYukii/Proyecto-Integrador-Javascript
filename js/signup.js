const botonLogin = document.querySelector(".signup__button");
const errorNombre = document.querySelector("#error__nombre");
const errorEdad = document.querySelector("#error__edad");
const errorUsername = document.querySelector("#error__username");
const errorMail = document.querySelector("#error__mail");
const errorPassword = document.querySelector("#error__password");
const errorRepeatPassword = document.querySelector("#error__repeat-password");
const signupInfo = document.querySelector("#signup__info");

function init() {
  botonLogin.addEventListener("click", signUp);
}

function signUp(e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const repeatPasswordInput = document.getElementById("repeat-password");

  document.getElementById("signed__up").classList.add("message__hidden");
  errorNombre.classList.add("message__hidden");
  errorEdad.classList.add("message__hidden");
  errorUsername.classList.add("message__hidden");
  errorMail.classList.add("message__hidden");
  errorPassword.classList.add("message__hidden");
  errorRepeatPassword.classList.add("message__hidden");

  let tieneError = false;

  if (nameInput.value.trim() === "") {
    errorNombre.innerHTML = "Please enter your name.";
    errorNombre.classList.remove("message__hidden");
    tieneError = true;
  } else {
    errorNombre.classList.add("message__hidden");
  }

  if (ageInput.value.trim() === "") {
    errorEdad.innerHTML = "Please enter your age.";
    errorEdad.classList.remove("message__hidden");
    tieneError = true;
  } else if (
    isNaN(ageInput.value.trim()) ||
    Number(ageInput.value.trim()) < 0
  ) {
    errorEdad.innerHTML = "Please a valid number.";
    errorEdad.classList.remove("message__hidden");
  } else if (Number(ageInput.value.trim()) < 13) {
    errorEdad.innerHTML = "You must be 13 or older to join.";
    errorEdad.classList.remove("message__hidden");
  } else {
    errorEdad.classList.add("message__hidden");
  }

  if (usernameInput.value.trim() === "") {
    errorUsername.innerHTML = "Please enter your username.";
    errorUsername.classList.remove("message__hidden");
    tieneError = true;
  } else {
    errorUsername.classList.add("message__hidden");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput.value.trim() === "") {
    errorMail.innerHTML = "Please enter your email.";
    errorMail.classList.remove("message__hidden");
    tieneError = true;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    errorMail.innerHTML = "Please enter a valid email.";
    errorMail.classList.remove("message__hidden");
    tieneError = true;
  } else {
    errorMail.classList.add("message__hidden");
  }

  if (passwordInput.value === "") {
    errorPassword.innerHTML = "Please enter your password.";
    errorPassword.classList.remove("message__hidden");
    tieneError = true;
  } else {
    errorPassword.classList.add("message__hidden");
  }

  if (repeatPasswordInput.value !== passwordInput.value) {
    errorRepeatPassword.innerHTML = "The passwords do not match.";
    errorRepeatPassword.classList.remove("message__hidden");
    tieneError = true;
  } else {
    errorRepeatPassword.classList.add("message__hidden");
  }

  if (!tieneError) {
    signupInfo.reset();
    document.getElementById("signed__up").classList.remove("message__hidden");
    errorNombre.classList.add("message__hidden");
    errorEdad.classList.add("message__hidden");
    errorUsername.classList.add("message__hidden");
    errorMail.classList.add("message__hidden");
    errorPassword.classList.add("message__hidden");
    errorRepeatPassword.classList.add("message__hidden");
  }
}

init();
