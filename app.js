const menuBtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navlinks.classList.toggle("open");

    const isOpen = navlinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navlinks.addEventListener("click", (e) => {
    navlinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const headerImage = document.querySelector(".header_image");
 headerImage.addEventListener(
     "animationend", 
     (e) => {
     setTimeout(() => {
         headerImage.classList.add("reveal");
     });
 },
 {once: true }
);

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollRevealOption().reveal("header_content h1", {
    scrollRevealOption,
    delay: 1500,
});

ScrollRevealOption().reveal("header_content h2", {
    scrollRevealOption,
    delay: 2000,
});

ScrollRevealOption().reveal("header_content p", {
    scrollRevealOption,
    delay: 2500,
});

ScrollRevealOption().reveal("header_content div", {
    scrollRevealOption,
    delay: 3000,
});

ScrollReveal().reveal(".header .nav_links",{
    delay: 3500,
});