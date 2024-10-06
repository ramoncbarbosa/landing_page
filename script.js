const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.menu-close');
const blurOverlay = document.querySelector('.blur-overlay');
const menuLinks = document.querySelectorAll('.mobile-menu .ancoras');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  blurOverlay.classList.add('active');
});

closeIcon.addEventListener('click', () => closeMenu());
blurOverlay.addEventListener('click', () => closeMenu());

menuLinks.forEach(link => {
  link.addEventListener('click', () => closeMenu());
});

function closeMenu() {
  mobileMenu.classList.remove('active');
  blurOverlay.classList.remove('active');
}
