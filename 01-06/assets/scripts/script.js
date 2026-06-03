const menu = document.getElementById("menu-desktop");
const btn = document.getElementById("btn-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("menu-mobile");
});