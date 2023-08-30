window.addEventListener("DOMContentLoaded", function () {
  const coordinatesElementsCopy = document.querySelectorAll(".coordinates-copy");

  coordinatesElementsCopy.forEach((coordinatesCopy) => {
    coordinatesCopy.addEventListener("click", () => {
      navigator.clipboard.writeText(coordinatesCopy.querySelector(".copied-to-clipboard"))
        .then(() => {
          coordinatesCopy.querySelector('.coordinates__copy-text').textContent = 'Скопировано в буфер обмена';
        })
        .then(() => {
          setTimeout(() => {
            coordinatesCopy.querySelector('.coordinates__copy-text').textContent = 'Скопировать координаты';
          }, 3000)
        })
      coordinatesCopy.querySelector(".copied-to-clipboard");
    })
  })
})