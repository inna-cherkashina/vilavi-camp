let videoElement = document.querySelector('video');
let buttonVideo = document.querySelector('.btn-video')
buttonVideo.addEventListener('click', function () {
  if (videoElement.paused) {
    videoElement.play();
    buttonVideo.classList.add('video-pause');
    buttonVideo.classList.remove('video-play');
  } else {
    videoElement.pause();
    buttonVideo.classList.remove('video-pause');
    buttonVideo.classList.add('video-play');
  }
})