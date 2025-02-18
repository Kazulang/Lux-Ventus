const Menu = document.querySelector(".menu");
const Nav = document.querySelector(".nav");

Menu.addEventListener("click", () => {
    Nav.classList.toggle("active");
})