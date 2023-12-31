window.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");

  if (window.scrollY > 5) {
    header.classList.add("--scroll");
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 5) {
      header.classList.add("--scroll");
    } else {
      header.classList.remove("--scroll");
    }
  })
})