const mobileMenu = document.querySelector('.mobile-menu');
const toggleMobileMenu = document.querySelector('.toggle-mobile-menu');

toggleMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('!left-0');
  toggleMobileMenu.classList.toggle('!bg-tan');
});

const swiper = new Swiper('.swiper-mobile', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiperDesktop = new Swiper('.swiper-desktop', {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  let yPosition = window.scrollY;
  console.log(yPosition);
  if (yPosition > 1) {
    header.style.backgroundColor = 'white';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});
