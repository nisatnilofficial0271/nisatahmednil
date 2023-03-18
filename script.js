const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-nav');

navbarToggler.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});
