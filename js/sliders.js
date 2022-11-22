const sale = new Swiper('.sale__slider', {
   // Optional parameters
   slidesPerView: 1.325,
   spaceBetween: 10,
   centeredSlides: true,
   loop: true,

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },


});

const popular = new Swiper('.popular__slider', {
   // Optional parameters
   slidesPerView: 1.325,
   spaceBetween: 10,
   centeredSlides: true,
   loop: true,

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },


});

const consumables = new Swiper('.consumables__slider', {
   // Optional parameters
   slidesPerView: 1.325,
   spaceBetween: 10,
   centeredSlides: true,
   loop: true,

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },


});

const blog = new Swiper('.blog__slider', {
   // Optional parameters
   spaceBetween: 10,
   centeredSlides: true,
   loop: true,

   pagination: {
      el: '.swiper-pagination',
      clickable: true
   },
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },


});

const photogalery = new Swiper('.photogalery__slider', {
   // Optional parameters
   spaceBetween: 10,
   centeredSlides: true,
   loop: true,

   pagination: {
      el: '.swiper-pagination',
      clickable: true
   },
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },


});