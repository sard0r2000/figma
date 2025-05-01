document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});

// dark-mood
let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "./images/sun.png";
  } else {
    this.firstElementChild.src = "./images/moon.svg";
  }
  document.body.classList.toggle("dark");
});

// shrink
window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.querySelector("header");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}
