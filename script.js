const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
navLink.forEach((item) => {
    item.addEventListener("click", function(){
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
})