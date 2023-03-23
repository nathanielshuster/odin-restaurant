import initialize from "./initialize";
import home from "./home";
import menu from "./menu";
import contact from "./contact";

initialize();

const addListeners = (() => {
  const homeLink = document.querySelector('.home-link')
  homeLink.addEventListener('click', home)

  const menuLink = document.querySelector('.menu-link')
  menuLink.addEventListener('click', menu)

  const contactLink = document.querySelector('.contact-link')
  contactLink.addEventListener('click', contact)
})();
