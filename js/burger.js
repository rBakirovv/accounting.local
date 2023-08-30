window.addEventListener("DOMContentLoaded", function () {
  const html = document.querySelector("html");

  const burgerIcon = document.querySelector(".burger-icon");
  const mobileMenuClose = document.querySelector(".mobile-menu__close")

  const mobileMenu = document.querySelector(".mobile-menu");
  const menuOverlay = document.querySelector(".menu-overlay");

  function openMenu() {
    html.style.overflow = "hidden";

    mobileMenu.classList.add("--active");
    menuOverlay.classList.add("--active");
  }

  function closeMenu() {
    html.style.overflow = "visible";

    mobileMenu.classList.remove("--active");
    menuOverlay.classList.remove("--active");
  }

  burgerIcon && burgerIcon.addEventListener("click", () => {
    openMenu();
  })

  mobileMenuClose && mobileMenuClose.addEventListener("click", () => {
    closeMenu();
  })
})