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

// let colorElementMobile = document.querySelector('.circle-scroll--mobile svg');
window.addEventListener('scroll', () => {
  
  if (window.pageYOffset < 4660) {
    colorElement.classList.remove('circle-scroll--color-one');
  }
  else if (window.pageYOffset > 4660 && window.pageYOffset < 4830) {
    colorElement.classList.add('circle-scroll--color-one');
    colorElement.classList.remove('circle-scroll--color-two');
  }
  else if (window.pageYOffset > 4830 && window.pageYOffset < 6000) {
    colorElement.classList.remove('circle-scroll--color-one');
    colorElement.classList.add('circle-scroll--color-two');
  }  

 if (window.matchMedia("(max-width: 1000px)")) {
    if (window.pageYOffset < 4840) {
      colorElement.classList.remove('circle-scroll--color-one');
    }
    else if (window.pageYOffset > 4840 && window.pageYOffset < 4960) {
      colorElement.classList.add('circle-scroll--color-one');
      colorElement.classList.remove('circle-scroll--color-two');
    }
    else if (window.pageYOffset > 4960 && window.pageYOffset < 5300) {
      colorElement.classList.remove('circle-scroll--color-one');
      colorElement.classList.add('circle-scroll--color-two');
    }
  } 

});



let meetColorElement = document.querySelector('.meet-place__circle-scroll svg');
window.addEventListener('scroll', () => {
  if (window.pageYOffset < 7670) {
    meetColorElement.classList.remove('meet-place__circle-scroll--color-one');
  }
  else if (window.pageYOffset > 7670 && window.pageYOffset < 7850) {
    meetColorElement.classList.add('meet-place__circle-scroll--color-one');
    meetColorElement.classList.remove('meet-place__circle-scroll--color-two');
  }
  else if (window.pageYOffset > 7850 && window.pageYOffset < 8200) {
    meetColorElement.classList.remove('meet-place__circle-scroll--color-one');
    meetColorElement.classList.add('meet-place__circle-scroll--color-two');
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