window.addEventListener("DOMContentLoaded", function () {
  const calculatorSection = document.querySelector(".express-calculator");

  const sliderInput = calculatorSection.querySelector(".express-calculator__slider");
  const sliderRangeinner = calculatorSection.querySelector(".express-calculator__rangeinner");
  const sliderNumbers = calculatorSection.querySelectorAll(".slider-line__num");
  const rangeInfo = calculatorSection.querySelector(".express-calculator__range-info");
  const rangeThumb = calculatorSection.querySelector(".express-calculator__thumb");

  function sliderInputChangeHandler() {
    sliderRangeinner.style.width = `${100 - ((sliderInput.value / sliderInput.max) * 100)}%`;

    rangeInfo.textContent = `${Math.ceil(sliderInput.value)}`;
    rangeThumb.style.left = `${((sliderInput.value / sliderInput.max) * 100)}%`;

    if (sliderInput.value < 100) {
      sliderInput.classList.add("express-calculator__slider_left");
    } else {
      sliderInput.classList.add("express-calculator__slider_right");
    }

    if (Math.ceil(sliderInput.value) < 10) {
      sliderInput.classList.remove("express-calculator__slider_right");
    }

    if (Math.ceil(sliderInput.value) > 90) {
      sliderInput.classList.remove("express-calculator__slider_left");
    }

    sliderNumbers.forEach((item) => {
      if (parseInt(item.textContent) <= sliderInput.value) {
        item.classList.add("slider-line_active");
      } else {
        item.classList.remove("slider-line_active");
      }
    })
  }

  sliderInput.addEventListener("change", sliderInputChangeHandler);
  sliderInput.addEventListener("input", sliderInputChangeHandler);
  sliderInput.addEventListener("click", sliderInputChangeHandler);
})