import initialize from "./initialize";
import home from "./home";
import menu from "./menu";
import contact from "./contact";

initialize();

const addListeners = (() => {
  const homeLink = document.querySelector('.home')
  homeLink.addEventListener('click', home)

  const menuLink = document.querySelector('.menu')
  menuLink.addEventListener('click', menu)

  const contactLink = document.querySelector('.contact')
  contactLink.addEventListener('click', contact)
})();
