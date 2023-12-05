window.addEventListener("DOMContentLoaded", function () {
  const coordinatesElementsCopy = document.querySelectorAll(".coordinates-copy");

  coordinatesElementsCopy.forEach((coordinatesCopy) => {
    coordinatesCopy.addEventListener("click", () => {
      navigator.clipboard.writeText(coordinatesCopy.querySelector(".copied-to-clipboard").textContent)
        .then(() => {
          coordinatesCopy.querySelector('.copy-text').textContent = 'Скопировано в буфер обмена';
        })
        .then(() => {
          setTimeout(() => {
            coordinatesCopy.querySelector('.copy-text').textContent = 'Скопировать координаты';
          }, 3000)
        })
    })
  })
})