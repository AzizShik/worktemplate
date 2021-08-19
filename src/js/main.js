const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.modalOpen');
const modalClose = document.querySelector('.ModalClose');
const modalOverlay = document.querySelector('.modal__overlay');

modalOpen.addEventListener('click', () => {
  modal.classList.add('modal-open');
  document.documentElement.classList.add('page-lock');

});
modalClose.addEventListener('click', () => {
  modal.classList.remove('modal-open');
  document.documentElement.classList.remove('page-lock');
});

modalOverlay.addEventListener('click', (e) => {

  if (!e.target.closest('.modal__content')) {
    modal.classList.remove('modal-open');
    document.documentElement.classList.remove('page-lock');
  }

});

// MODAL

// BURGER

const burger = document.querySelector('.ham');
const burgerMenu = document.querySelector('.header__nav');
const burgerLinks = document.querySelectorAll('.header__link');

burger.addEventListener('click', function () {
  this.classList.toggle('active-burger');
  burgerMenu.classList.toggle('header__nav--active');
});

function burgerLinksClose(media) {
  if (media.matches) {
    burgerLinks.forEach(item => {
      item.addEventListener('click', (e) => {
        burger.classList.remove('active-burger');
        burgerMenu.classList.remove('header__nav--active');
      });
    });
  }
}


const maxWidth991 = window.matchMedia("(max-width: 991px)");

burgerLinksClose(maxWidth991);


// Progress

const progress = document.querySelector('.progress')
const progressLink = document.querySelector('.progress__link')
const circle = document.querySelector('.progress-circle');

const progressAnimation = () => {
  let scrollTop = window.scrollY;
  let windowHeight = window.innerHeight;
  let siteHeight = document.documentElement.scrollHeight;
  let percentageProgress = Math.floor(scrollTop / (siteHeight - windowHeight) * 100);

  let radius = circle.getAttribute('r');
  let circleLength = 2 * Math.PI * radius;
  circle.setAttribute('stroke-dasharray', circleLength);
  circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);



};


window.addEventListener('scroll', () => {
  progressAnimation();

  if (window.scrollY > 500) {
    progress.classList.add('progress--active');
  } else {
    progress.classList.remove('progress--active');
  }

});

progressLink.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smoot',
  });
});


// Preloader

// const preloader = document.querySelector('.preloader');
// document.documentElement.style.overflow = 'hidden';

// window.onload = () => {
//   preloader.classList.remove('preloader--active');
//   document.documentElement.style.overflow = 'auto';
// }