// retrieve elements with a specified class name //
const buttonLayout = document.querySelector(".button_layout");
const buttons = document.querySelectorAll('.toggle');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

// function to make a menu that can open and close itself
function toggleMenu() {
    // mobile view - closed menu
    if (buttonLayout.classList.contains("showMenu")) {
        buttonLayout.classList.remove("showMenu");
        // show hamburger menu icon to open the menu
        closeIcon.style.display = "none";
        menuIcon.style.display = "flex";
    // mobile view - opened menu
    } else {
        buttonLayout.classList.add("showMenu")
        // show cross icon to close the menu
        closeIcon.style.display = "flex"
        menuIcon.style.display = "none";
    }
}

// listen to clicks to toggle the menu
hamburger.addEventListener("click", toggleMenu)