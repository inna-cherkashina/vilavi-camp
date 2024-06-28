//! Слайдер Start
$(document).ready(function () {
  $('.slider-container').slick({
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    // infinite: true,
    // autoplay: true,
    // autoplaySpeed: 1000
  });
});

//! Слайдер End

//~ Запуск видеоплеера Start
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
//~ Запуск видеоплеера End


//^ Анимация смены цвета ползунка при вертикальном скролле Start
let colorElement = document.querySelector('.circle-scroll svg');
window.addEventListener('scroll', () => {
  if (window.pageYOffset < 3308) {
    colorElement.classList.remove('circle-scroll--color-one');
  }
  else if (window.pageYOffset > 3308 && window.pageYOffset < 3348) {
    colorElement.classList.add('circle-scroll--color-one');
    colorElement.classList.remove('circle-scroll--color-two');
  }
  else if (window.pageYOffset > 3348 && window.pageYOffset < 3378) {
    colorElement.classList.remove('circle-scroll--color-one');
    colorElement.classList.add('circle-scroll--color-two');
    colorElement.classList.remove('circle-scroll--color-three');
  }
  else if (window.pageYOffset > 3378 && window.pageYOffset < 3428) {
    colorElement.classList.remove('circle-scroll--color-two');
    colorElement.classList.add('circle-scroll--color-three');
    colorElement.classList.remove('circle-scroll--color-four');
  }
  else if (window.pageYOffset > 3428 && window.pageYOffset < 3460) {
    colorElement.classList.remove('circle-scroll--color-three');
    colorElement.classList.add('circle-scroll--color-four');
    colorElement.classList.remove('circle-scroll--color-five');
  }
  else if (window.pageYOffset > 3460 && window.pageYOffset < 3500) {
    colorElement.classList.remove('circle-scroll--color-four');
    colorElement.classList.add('circle-scroll--color-five');
    colorElement.classList.remove('circle-scroll--color-six');
  }
  else if (window.pageYOffset > 3500 && window.pageYOffset < 3630) {
    colorElement.classList.remove('circle-scroll--color-five');
    colorElement.classList.add('circle-scroll--color-six');
    colorElement.classList.remove('circle-scroll--color-seven');

  }
  else if (window.pageYOffset > 3630 && window.pageYOffset < 3700) {
    colorElement.classList.remove('circle-scroll--color-six');
    colorElement.classList.add('circle-scroll--color-seven');
    colorElement.classList.remove('circle-scroll--color-eight');
  }
  else if (window.pageYOffset > 3700 && window.pageYOffset < 4000) {
    colorElement.classList.remove('circle-scroll--color-seven');
    colorElement.classList.add('circle-scroll--color-eight');
  }
});

let meetColorElement = document.querySelector('.meet-place__circle-scroll svg');
window.addEventListener('scroll', () => {
  if (window.pageYOffset < 6350) {
    meetColorElement.classList.remove('meet-place__circle-scroll--color-one');
  }
  else if (window.pageYOffset > 6350 && window.pageYOffset < 6390) {
    meetColorElement.classList.add('meet-place__circle-scroll--color-one');
    meetColorElement.classList.remove('meet-place__circle-scroll--color-two');
  }
  else if (window.pageYOffset > 6390 && window.pageYOffset < 6430) {
    meetColorElement.classList.remove('meet-place__circle-scroll--color-one');
    meetColorElement.classList.add('meet-place__circle-scroll--color-two');
    meetColorElement.classList.remove('meet-place__circle-scroll--color-three');
  }
  else if (window.pageYOffset > 6430 && window.pageYOffset < 6470) {
    meetColorElement.classList.remove('meet-place__circle-scroll--color-two');
    meetColorElement.classList.add('meet-place__circle-scroll--color-three');
    meetColorElement.classList.remove('meet-place__circle-scroll--color-four');
  }
  else if (window.pageYOffset > 6470 && window.pageYOffset < 6536) {
    meetColorElement.classList.remove('meet-place__circle-scroll--color-three');
    meetColorElement.classList.add('meet-place__circle-scroll--color-four');
    meetColorElement.classList.remove('meet-place__circle-scroll--color-five');
  }
  else if (window.pageYOffset > 6536 && window.pageYOffset < 6580) {
    meetColorElement.classList.remove('meet-place__circle-scroll--color-four');
    meetColorElement.classList.add('meet-place__circle-scroll--color-five');
    meetColorElement.classList.remove('meet-place__circle-scroll--color-six');
  }
  else if (window.pageYOffset > 6580 && window.pageYOffset < 6650) {
    meetColorElement.classList.remove('meet-place__circle-scroll--color-five');
    meetColorElement.classList.add('meet-place__circle-scroll--color-six');
    meetColorElement.classList.remove('meet-place__circle-scroll--color-seven');
  }
  else if (window.pageYOffset > 6650 && window.pageYOffset < 6720) {
    meetColorElement.classList.remove('meet-place__circle-scroll--color-six');
    meetColorElement.classList.add('meet-place__circle-scroll--color-seven');
    meetColorElement.classList.remove('meet-place__circle-scroll--color-eight');
  }
  else if (window.pageYOffset > 6720 && window.pageYOffset < 8000) {
    meetColorElement.classList.remove('meet-place__circle-scroll--color-seven');
    meetColorElement.classList.add('meet-place__circle-scroll--color-eight');
  }
});
//^ Анимация смены цвета ползунка при вертикальном скролле End


//TODO Аккордион Start
let accordeons = document.querySelectorAll('.accordion-item');
accordeons.forEach(function (accord) {
  accord.addEventListener('click', function (elem) {

    let action = elem.target;
    let currentAccordElem = action.closest('.accordion-item');//определяем текущий бокс
    let currentContent = action.nextElementSibling; // находим скрытый контент
    currentAccordElem.classList.toggle("active"); //присваиваем основному контейнеру флаг активности   
    if (currentAccordElem.classList.contains("active")) {
      currentContent.style.maxHeight = currentContent.scrollHeight + "px";
      //Обратить внимание чтоб стили были присвоены классу .accordion-collapse

    }
    else {
      currentContent.style.maxHeight = 0;
    }
  });
});
//TODO Аккордион End

let animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll)
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      let animItem = animItems[i];
      let animItemHeight = animItem.offsetHeight;
      let animItemOffset = offset(animItem).top;
      let animStart = 1000;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add('active');
      } else {

        if (!animItem.classList.contains('anim-no-hide')) {
          animItem.classList.remove('active');
        }
        //а если мы хотим чтоб анимация сохранялась при скролле вверх и вниз, то оставляем просто
        // else {animItem.classList.remove('active');}
      }
    }
  }
  function offset(elem) {
    let rect = elem.getBoundingClientRect();
    let scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    }
  }
  animOnScroll();
}