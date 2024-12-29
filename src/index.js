const mobileMenu = document.querySelector('.mobile-menu');
const toggleMobileMenu = document.querySelector('.toggle-mobile-menu');

toggleMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('!left-0');
  toggleMobileMenu.classList.toggle('!bg-tan');
});
