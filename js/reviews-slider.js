window.addEventListener("DOMContentLoaded", function () {
  const swiperReviews = new Swiper('.reviews__slider-container', {
    loop: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
      el: ".reviews-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: '.reviews-slider-next',
      prevEl: '.reviews-slider-prev',
    },
    breakpoints: {
      1060: {
        centeredSlides: false,
      },
      500: {
        centeredSlides: false,
        slidesPerView: "auto",
      },
    },
  });
})