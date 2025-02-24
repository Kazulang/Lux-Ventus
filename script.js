const Menu = document.querySelector(".menu");
const Nav = document.querySelector(".nav");

Menu.addEventListener("click", () => {
    Nav.classList.toggle("active");
    Nav.classList.remove("hiddenScrl");
})

window.addEventListener("scroll", function(){
    if(this.window.scrollY <= 15){
        Nav.classList.remove("hiddenScrl");
        Nav.classList.remove("active");
    } else {
        Nav.classList.add("hiddenScrl");
    }
})