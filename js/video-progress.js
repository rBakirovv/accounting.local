window.addEventListener("load", function () {
  const videoContainer = document.querySelector(".video-progress")
  const progress = videoContainer.querySelector(".video-progress-line");
  const video = videoContainer.querySelector("video");

  function progressLoop() {
    setInterval(function () {
      if (progress) {
        progress.value = Math.round(
          (video.currentTime / video.duration) * 100
        );
      }
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        progressLoop();
      }
    });
  }, {
    threshold: 0.1,
  })

  document.querySelectorAll(".video-progress").forEach((item) => {
    observer.observe(item);
  })
})