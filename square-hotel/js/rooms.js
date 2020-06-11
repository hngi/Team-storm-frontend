// when the burger icon is pressed, toggle the nav links
// first get the burger
const burger = document.querySelector(".burger");

// add event listener to the burger
burger.addEventListener("click", () => {
    // get the nav links container
    const navLinks = document.querySelector(".nav-links");

    // show the nav bar
    navLinks.classList.toggle("nav-links-show");

    // turn the burger icon to X
    burger.classList.toggle("x-bar");

})
