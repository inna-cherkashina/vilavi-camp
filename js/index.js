//! Слайдер Start

$(document).ready(function () {
  $('.slider-container').slick({
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: true,
    touchThreshold: 10,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },

      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]
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
let colorElementMobile = document.querySelector('.circle-scroll--mobile svg');
let meetColorElement = document.querySelector('.meet-place__circle-scroll svg');
let meetColorElementMobile = document.querySelector('.meet-place__line-scroll--mobile svg');

let circle = document.querySelector('.circle-scroll--mobile');
let line = document.querySelector('.line-scroll--mobile');
console.log(circle.offsetTop);
if (circle.offsetTop == 300) {
  console.log('asdf');
}
window.addEventListener('scroll', () => {
  if (window.pageYOffset < 4760) {
    colorElement.classList.remove('circle-scroll--color-one');
  }
  else if (window.pageYOffset > 4760 && window.pageYOffset < 4930) {
    colorElement.classList.add('circle-scroll--color-one');
    colorElement.classList.remove('circle-scroll--color-two');
  }
  else if (window.pageYOffset > 4930 && window.pageYOffset < 6100) {
    colorElement.classList.remove('circle-scroll--color-one');
    colorElement.classList.add('circle-scroll--color-two');
  }

  if (window.matchMedia("(max-width: 500px)")) {

    if (window.pageYOffset < 4550) {
      colorElementMobile.classList.remove('circle-scroll--color-one');
    }
    else if (window.pageYOffset > 4550 && window.pageYOffset < 4950) {
      colorElementMobile.classList.add('circle-scroll--color-one');
      colorElementMobile.classList.remove('circle-scroll--color-two');
    }
    else if (window.pageYOffset > 4950 && window.pageYOffset < 5500) {
      colorElementMobile.classList.remove('circle-scroll--color-one');
      colorElementMobile.classList.add('circle-scroll--color-two');
    }
  }
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset < 7770) {
    meetColorElement.classList.remove('meet-place__circle-scroll--color-one');
  }
  else if (window.pageYOffset > 7770 && window.pageYOffset < 7950) {
    meetColorElement.classList.add('meet-place__circle-scroll--color-one');
    meetColorElement.classList.remove('meet-place__circle-scroll--color-two');
  }
  else if (window.pageYOffset > 7950 && window.pageYOffset < 8100) {
    meetColorElement.classList.remove('meet-place__circle-scroll--color-one');
    meetColorElement.classList.add('meet-place__circle-scroll--color-two');
  }

  if (window.matchMedia("(max-width: 500px)")) {
    if (window.pageYOffset < 7250) {
      meetColorElementMobile.classList.remove('meet-place__circle-scroll--color-one');
    }
    else if (window.pageYOffset > 7250 && window.pageYOffset < 7750) {
      meetColorElementMobile.classList.add('meet-place__circle-scroll--color-one');
      meetColorElementMobile.classList.remove('meet-place__circle-scroll--color-two');
    }
    else if (window.pageYOffset > 7750 && window.pageYOffset < 8300) {
      meetColorElementMobile.classList.remove('meet-place__circle-scroll--color-one');
      meetColorElementMobile.classList.add('meet-place__circle-scroll--color-two');
    }
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

let footerButton = document.querySelector('.button');
let modal = document.querySelector('.modal-window');
let cross = document.querySelector('.cross');

footerButton.addEventListener('click', function () {
  modal.classList.add('modal-window--active');

});

cross.addEventListener('click', function () {
  modal.classList.remove('modal-window--active');
})