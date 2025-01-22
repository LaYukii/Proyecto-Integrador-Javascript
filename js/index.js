import { gameArray } from "./games.js";

var cart = [];
const gamesList = document.querySelector(".games__list");
const categoryList = document.querySelector("#category__list");
const cartCont = document.querySelector(".cart_content");
const menuToggle = document.querySelector("#menu-toggle-clickable");
const sendButton = document.querySelector("#send__button");
const contactForm = document.querySelector("#contact__form");
const errorMail = document.querySelector("#error__email");
const errorNombre = document.querySelector("#error__nombre");
const errorMessage = document.querySelector("#error__message");
const precioSpan = document.querySelector("#precio");
const botonComprar = document.querySelector(".cart__total--button");
var precio = 0;

function init() {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  renderCarrito();
  createCategoryList();
  renderGames(gameArray);
  categoryList.addEventListener("change", cambiarCategoria);
  gamesList.addEventListener("click", addCarrito);
  cartCont.addEventListener("click", borrarJuego);
  menuToggle.addEventListener("click", toggleMenu);
  contactForm.addEventListener("submit", enviarMensaje);
  // contactForm.addEventListener("click", editForm);
  botonComprar.addEventListener("click", comprarJogos);
}

function renderCarrito() {
  if (cart.length !== 0) {
    cart.forEach((item) => {
      const game = gameArray.find((x) => x.id === item);

      renderCart(game);
    });
    // buyBtnContainer.classList.remove('hidden')
  }
}

function comprarJogos() {
  if (cart.length !== 0) {
    if (confirm("Confirm game purchase?")) {
      cart.forEach((item) => {
        const game = gameArray.find((x) => x.id == item);
        document.getElementById("cartItem-" + item).remove();

        precio -= game.precio;

        precio = Math.round(precio * 100) / 100;
      });

      precioSpan.innerHTML = "$" + precio;

      cart = [];
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    // buyBtnContainer.classList.remove('hidden')
  }
}

function addCarrito(e) {
  if (e.target.classList.contains("catalog__price--btn")) {
    const cartItem = cart.find((x) => x == e.target.value);
    if (!cartItem) {
      cart = [...cart, e.target.value];
      localStorage.setItem("cart", JSON.stringify(cart));

      const game = gameArray.find((x) => x.id == e.target.value);
      renderCart(game);
    }
  }
}

function borrarJuego(e) {
  if (e.target.classList.contains("cart__info--delete")) {
    const value = e.target.getAttribute("value");
    const game = gameArray.find((x) => x.id == value);
    document.getElementById("cartItem-" + value).remove();

    const index = cart.indexOf(value);
    if (index > -1) {
      cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    precio -= game.precio;

    precio = Math.round(precio * 100) / 100;

    precioSpan.innerHTML = "$" + precio;
  }
}

function renderGames(games) {
  gamesList.innerHTML = "";
  games.forEach((game) => {
    gamesList.innerHTML += `
        <div class="catalog__games">
          <div class="catalog__img">
            <img src="${game.imagen}" alt="${game.alt}" />
          </div>
          <div class="catalog__info">
            <h3>${game.nombre}</h3>
            <p><span>Genres:</span> ${game.genero}</p>
            <p>
              ${game.descripcion}
            </p>
            <div class="catalog__price">
              <span>$${game.precio}</span>
              <button value=${game.id} class="catalog__price--btn">Buy</button>
            </div>
          </div>
        </div>`;
  });
}

function renderCart(game) {
  cartCont.innerHTML += `
        <div id="cartItem-${game.id}" class="cart__items">
          <img class="cart__image" src="${game.imagen}" alt="${game.alt}" />

          <div class="cart__info">
            <p>${game.nombre}</p>
            <span>$${game.precio}</span>
          </div>
          <div value="${game.id}" class="cart__info--delete">
            Delete
          </div>
        </div>`;

  precio += game.precio;

  precio = Math.round(precio * 100) / 100;

  precioSpan.innerHTML = "$" + precio;
}

function createCategoryList() {
  //completar
  var categories = gameArray.map((coso) => coso.genero);
  categories = ["All", ...new Set(categories)];
  categories.forEach((category) => {
    categoryList.innerHTML += `<option value="${category}">${category}</option>`;
  });
}

function toggleMenu() {
  document.getElementById("blurry").classList.toggle("blurry");
  document
    .getElementById("navbar__list")
    .classList.toggle("navbar__list-visible");
}

function enviarMensaje(e) {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const nameInput = document.getElementById("name");
  const messageInput = document.getElementById("message");

  document.getElementById("message__sent").classList.add("message__hidden");
  errorMail.classList.add("message__hidden");
  errorNombre.classList.add("message__hidden");
  errorMessage.classList.add("message__hidden");

  let tieneError = false;
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

  if (nameInput.value.trim() === "") {
    errorNombre.innerHTML = "Please enter your name.";
    errorNombre.classList.remove("message__hidden");
    tieneError = true;
  } else {
    errorNombre.classList.add("message__hidden");
  }

  if (messageInput.value.trim() === "") {
    errorMessage.innerHTML = "Please enter your message.";
    errorMessage.classList.remove("message__hidden");
    tieneError = true;
  } else if (messageInput.value.trim().length < 50) {
    errorMessage.innerHTML = "Message must be at least 50 characters long.";
    errorMessage.classList.remove("message__hidden");
    tieneError = true;
  } else if (messageInput.value.trim().length > 1000) {
    errorMessage.innerHTML = "Message must be 1000 characters or less.";
    errorMessage.classList.remove("message__hidden");
    tieneError = true;
  } else {
    errorMessage.classList.add("message__hidden");
  }

  if (!tieneError) {
    contactForm.reset();
    document
      .getElementById("message__sent")
      .classList.remove("message__hidden");
    errorMail.classList.add("message__hidden");
    errorNombre.classList.add("message__hidden");
    errorMessage.classList.add("message__hidden");
  }
}

// function editForm(e) {
//   e.preventDefault();
//   document.getElementById("message__sent").classList.add("message__hidden");
//   errorMail.classList.add("message__hidden");
//   errorNombre.classList.add("message__hidden");
//   errorMessage.classList.add("message__hidden");
// }

init();

function cambiarCategoria() {
  var games;
  if (categoryList.value === "All") {
    games = gameArray;
  } else {
    games = gameArray.filter((bicho) => bicho.genero === categoryList.value);
  }
  renderGames(games);
}
