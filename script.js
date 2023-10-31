const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
console.log(menu, navbar);

menu.addEventListener("click", () => {
  navbar.classList.toggle("active")
});

