window.addEventListener("DOMContentLoaded", function () {
  const swiperSpecialists = new Swiper('.video__slider-container', {
    
    loop: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 25,
    direction: "horizontal",
    allowTouchMove: true,
    pagination: {
      el: ".video-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      1070: {
        
        loop: false,
        slideToClickedSlide: false,
        centeredSlides: false,
        slidesPerView: "auto",
        spaceBetween: 25,
        direction: "horizontal",
        allowTouchMove: false,
      },
    },
  });
})