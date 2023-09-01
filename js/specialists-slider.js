window.addEventListener("DOMContentLoaded", function () {
  const swiperSpecialists = new Swiper('.specialists__slider-container', {
    autoHeight: true,
    loop: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    direction: "horizontal",
    allowTouchMove: true,
    pagination: {
      el: ".specialists-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      1060: {
        autoHeight: true,
        loop: false,
        slideToClickedSlide: false,
        centeredSlides: false,
        slidesPerView: "auto",
        spaceBetween: 20,
        direction: "horizontal",
        allowTouchMove: false,
      },
    },
  });
})