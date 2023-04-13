// Sticky Header
const header = document.querySelector('.header-wrapper');

window.addEventListener('scroll',function() {
  const scrollPos = window.scrollY;

  if (scrollPos > 0) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});

// Event when click menu bar
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', function() {
  navbar.classList.toggle('active-navbar');
});
closeBtn.addEventListener('click', function() {
    navbar.classList.remove('active-navbar');
});