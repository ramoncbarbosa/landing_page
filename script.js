const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.close-icon'); 

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.add('active'); 
});


closeIcon.addEventListener('click', () => {
  mobileMenu.classList.remove('active'); 
});
