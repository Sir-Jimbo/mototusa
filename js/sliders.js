const sale = new Swiper('.sale__slider', {
   // Optional parameters
   slidesPerView: 1.325,
   spaceBetween: 10,
   centeredSlides: true,
   loop: true,
   watchOverflow: true,
   //loopedSlides: 1,

   breakpoints: {
      768: {
         slidesPerView: 2.5,
      },

      960: {
         slidesPerView: 3.5,
      },

      1024: {
         slidesPerView: 4,
         spaceBetween: 35,
         centeredSlides: false,

      },

      1440: {
         slidesPerView: 4,
         spaceBetween: 70,
         centeredSlides: false,
      }
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },


});

const popular = new Swiper('.popular__slider', {
   // Optional parameters
   slidesPerView: 2.2,
   spaceBetween: 10,
   centeredSlides: true,
   loop: true,

   breakpoints: {
      568: {
         slidesPerView: 4.5,
      },

      960: {
         slidesPerView: 5.5,
      },

      1024: {
         slidesPerView: 6,
         centeredSlides: false,
      },

      1440: {
         slidesPerView: 10,
         centeredSlides: false,
      },
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },


});

const consumables = new Swiper('.consumables__slider', {
   // Optional parameters
   slidesPerView: 2.2,
   spaceBetween: 10,
   centeredSlides: true,
   loop: true,

   breakpoints: {
      568: {
         slidesPerView: 4.5,
      },

      960: {
         slidesPerView: 5.5,
      },

      1024: {
         slidesPerView: 6,
         centeredSlides: false,
      },

      1440: {
         slidesPerView: 10,
         centeredSlides: false,
      },
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },


});

const blog = new Swiper('.blog__slider', {
   // Optional parameters
   watchOverflow: true,
   breakpoints: {
      568: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },
      1440: {
         slidesPerView: 4,
      },
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true
   },

});

const photogalery = new Swiper('.photogalery__slider', {
   // Optional parameters
   //spaceBetween: 15,
   loop: true,
   watchOverflow: true,
   breakpoints: {
      568: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 4,
      },
      1440: {
         slidesPerView: 5,
         //spaceBetween: 25,
      },
   },

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