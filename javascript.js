/* eslint-disable linebreak-style */
const getHamburger = document.querySelector('.hamburger');
const getNav = document.querySelector('.nav-links');

getHamburger.addEventListener('click', () => {
  getNav.classList.toggle('show');
});

const swiper = new Swiper('#main', {
  // cssMode: true,
  loop: true,
  // centeredSlides: true,
  allowTouchMove: true,
  slidesPerView: 1,
  // spaceBetween: 10,
  // autoHeight: true,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  speed: 2000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   dynamicBullets: true,

  // },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 1,
    },
  },
  clickable: true,
  // mousewheel: true,
  // keyboard: true,
});

const swiperTestimonial = new Swiper('#second', {
  // cssMode: true,
  loop: true,
  // centeredSlides: true,
  allowTouchMove: true,
  slidesPerView: 1,
  // spaceBetween: 10,
  // autoHeight: true,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  speed: 2000,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
    // pauseOnMouseEnter: true,
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   dynamicBullets: true,

  // },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 4,
    },
  },
  clickable: true,
  // mousewheel: true,
  // keyboard: true,

});

AOS.init({
  // duration: 400,
  delay: 100,
  easing: 'ease-in-sine',
});
