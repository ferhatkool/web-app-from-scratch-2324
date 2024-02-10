const buttonLayout = document.querySelector(".button_layout");
const buttons = document.querySelectorAll('.toggle');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
    if (buttonLayout.classList.contains("showMenu")) {
        buttonLayout.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "flex";
    } else {
        buttonLayout.classList.add("showMenu")
        closeIcon.style.display = "flex"
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu)