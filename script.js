const hamburger = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger img");
const mobileNavbar = document.querySelector(".mobile-navbar");


hamburger.onclick = function () {
  mobileNavbar.classList.toggle("open");
  const isOpen = mobileNavbar.classList.contains('open');

  hamburgerIcon.classList = isOpen
    ? "./images/images/icon-menu.svg"
    : "./images/images/icon-close-menu.svg"
    
};

