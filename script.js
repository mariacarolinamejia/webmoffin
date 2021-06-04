var menuToggle = document.querySelector(".menu-toggle");
var menu = document.getElementById("menu");

menuToggle.addEventListener("click", (e) => {
    menu.classList.toggle("mostrar")
});