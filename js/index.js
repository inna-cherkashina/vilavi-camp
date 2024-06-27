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
});


let colorElement = document.querySelector('.circle-scroll svg');
window.addEventListener('scroll', () => {
  if (window.pageYOffset < 3800) {
    colorElement.classList.remove('circle-scroll--color-one');
  }
  else if (window.pageYOffset > 3800 && window.pageYOffset < 3924) {
    colorElement.classList.add('circle-scroll--color-one');
    colorElement.classList.remove('circle-scroll--color-two');
  }
  else if (window.pageYOffset > 3924 && window.pageYOffset < 3970) {
    colorElement.classList.remove('circle-scroll--color-one');
    colorElement.classList.add('circle-scroll--color-two');
    colorElement.classList.remove('circle-scroll--color-three');
  }
  else if (window.pageYOffset > 3970 && window.pageYOffset < 4160) {
    colorElement.classList.remove('circle-scroll--color-two');
    colorElement.classList.add('circle-scroll--color-three');
    colorElement.classList.remove('circle-scroll--color-four');
  }
  else if (window.pageYOffset > 4160 && window.pageYOffset < 4500) {
    colorElement.classList.remove('circle-scroll--color-three');
    colorElement.classList.add('circle-scroll--color-four');

  }

});

let meetColorElement = document.querySelector('.meet-place__circle-scroll svg');
window.addEventListener('scroll', () => {
  if (window.pageYOffset < 6870) {
    meetColorElement.classList.remove('meet-place__circle-scroll--color-one');
  }
  else if (window.pageYOffset > 6870 && window.pageYOffset < 6940) {
    meetColorElement.classList.add('meet-place__circle-scroll--color-one');
    meetColorElement.classList.remove('meet-place__circle-scroll--color-two');
  }
  else if (window.pageYOffset > 6940 && window.pageYOffset < 7010) {
    meetColorElement.classList.remove('meet-place__circle-scroll--color-one');
    meetColorElement.classList.add('meet-place__circle-scroll--color-two');
    meetColorElement.classList.remove('meet-place__circle-scroll--color-three');
  }
  else if (window.pageYOffset > 7010 && window.pageYOffset < 7120) {
    meetColorElement.classList.remove('meet-place__circle-scroll--color-two');
    meetColorElement.classList.add('meet-place__circle-scroll--color-three');
    meetColorElement.classList.remove('meet-place__circle-scroll--color-four');
  }
  else if (window.pageYOffset > 7120 && window.pageYOffset < 8500) {
    meetColorElement.classList.remove('meet-place__circle-scroll--color-three');
    meetColorElement.classList.add('meet-place__circle-scroll--color-four');
  }
});