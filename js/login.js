const botonLogin = document.querySelector(".login__button");
const errorNombre = document.querySelector("#error__nombre");
const errorPassword = document.querySelector("#error__password");
const loginInfo = document.querySelector("#login__info");

function init() {
  botonLogin.addEventListener("click", logIn);
}

function logIn(e) {
  e.preventDefault();

  const nameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  document.getElementById("logged__in").classList.add("message__hidden");
  errorNombre.classList.add("message__hidden");
  errorPassword.classList.add("message__hidden");

  let tieneError = false;

  if (nameInput.value.trim() === "") {
    errorNombre.innerHTML = "Please enter your name.";
    errorNombre.classList.remove("message__hidden");
    tieneError = true;
  } else {
    errorNombre.classList.add("message__hidden");
  }

  if (passwordInput.value === "") {
    errorPassword.innerHTML = "Please enter your password.";
    errorPassword.classList.remove("message__hidden");
    tieneError = true;
  } else {
    errorPassword.classList.add("message__hidden");
  }

  if (!tieneError) {
    loginInfo.reset();
    document.getElementById("logged__in").classList.remove("message__hidden");
    errorNombre.classList.add("message__hidden");
    errorPassword.classList.add("message__hidden");
  }
}

init();
