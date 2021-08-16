const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.modalOpen');
const modalClose = document.querySelector('.ModalClose');

modalOpen.addEventListener('click', () => {
  modal.classList.add('modal-open');
});
modalClose.addEventListener('click', () => {
  modal.classList.remove('modal-open');
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
    burgerLinks.addEventListener('click', () => {
      burger.classList.toggle('active-burger');
      burgerMenu.classList.toggle('header__nav--active');
    });
  }
}

const maxWidth991 = window.matchMedia("(max-width: 991px)");

burgerLinksClose(maxWidth991);