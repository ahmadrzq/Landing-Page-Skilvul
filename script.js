// Sticky Header
const header = document.querySelector(".header-wrapper");

window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;

  if (scrollPos > 0) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

// Event when click menu bar
const menuBtn = document.querySelector("#menu-btn");
const navbarMin = document.querySelector(".navbar-min");
const closeBtn = document.querySelector(".close-btn");
const navLink = document.querySelectorAll(".navbar-min ul li a");
const body = document.querySelector("body");

menuBtn.addEventListener("click", function () {
  navbarMin.classList.add("active-header");
  body.classList.add("no-scroll");
});
closeBtn.addEventListener("click", function () {
  navbarMin.classList.remove("active-header");
  body.classList.remove("no-scroll");
});
navLink.forEach((element) => {
  element.addEventListener("click", function () {
    navbarMin.classList.remove("active-header");
    body.classList.remove("no-scroll");
  });
});

// Check input type number
function isNumber() {
  const inputNumber = document.querySelector("#zip-code").value;
  if (isNaN(inputNumber)){
    return false;
  } else{
    return true;
  }
}



