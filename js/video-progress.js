window.addEventListener("DOMContentLoaded", function () {
  const videoContainer = document.querySelector(".video-progress")
  const progress = videoContainer.querySelector(".video-progress-line");
  const video = videoContainer.querySelector("video");

  function progressLoop() {
    setInterval(function () {
      progress.value = Math.round(
        (video.currentTime / video.duration) * 100
      );
    });
  }

  progressLoop();
})