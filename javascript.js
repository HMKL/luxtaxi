/* eslint-disable linebreak-style */
const getHamburger = document.querySelector('.hamburger');
const getNav = document.querySelector('.nav-links');

getHamburger.addEventListener('click', () => {
  getNav.classList.toggle('show');
});
