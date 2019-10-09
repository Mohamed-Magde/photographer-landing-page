const humburger = document.querySelector("#menu");
const navOpen = document.querySelector(".nav-open");
const contact = document.querySelector(".contact");
const socail = document.querySelector(".social");
const logo = document.querySelector(".logo-text");

humburger.addEventListener("click", tot);

function tot() {
  navOpen.classList.toggle("show");
  humburger.classList.toggle("dark");
  logo.classList.toggle("dark");
}
