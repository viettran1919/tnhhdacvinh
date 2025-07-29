jQuery(document).ready(function ($) {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top a").fadeIn();
    } else {
      $(".back-to-top a").fadeOut();
    }
  });

  $(".back-to-top a").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  //slider swiper
  var bio_energy_Slider = new Swiper(".bio-energy-slider", {
    slidesPerView: 1,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".bio-energy-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".bio-energy-button-next",
      prevEl: ".bio-energy-button-prev",
    },
  });

  //projects-swiper
  var bio_energy_project_Slider = new Swiper(".projects-slider", {
    breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      992: {
        slidesPerView: 3,
        centeredSlides: true,
      }
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".projects-swiper-button-next",
      prevEl: ".projects-swiper-button-prev",
    },
  });

});