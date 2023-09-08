window.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"');

  links.forEach(element => {
    element.addEventListener('click', function (e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = 10;
      const elementPosition = scrollTarget && scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      if (scrollTarget) {
        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
})