

// const tabsTrig = document.querySelectorAll('.project__tabs-link')
// const tabsContent = document.querySelectorAll('.project__tabs-content-item')

// tabsTrig.forEach(function (item) {
//   item.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = e.target.getAttribute('href').replace('#', '');

//     tabsTrig.forEach(function (child) {
//       child.classList.remove('project__tabs-link--active');
//     })

//     tabsContent.forEach(function (child) {
//       child.classList.remove('project__tabs-content-item--active');
//     })

//     item.classList.add('project__tabs-link--active')
//     document.getElementById(id).classList.add('project__tabs-content-item--active');

//   });
// });

// document.querySelector('.project__tabs-link').click();

// const swiper = new Swiper('.swiper-container', {
//   // Optional parameters
//   loop: true,

//   // Responsive breakpoints
//   breakpoints: {
//     1200: {
//       slidesPerView: 3,
//       spaceBetween: 30
//     },
//     767: {
//       slidesPerView: 2,
//       spaceBetween: 20
//     }
//   },


//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   observer: true,
//   observeParents: true,
//   observeSlideChildren: true,


// });

// const questItem = document.querySelectorAll('.questions__item');
// const questTrig = document.querySelectorAll('.questions__trigger');
// const questContent = document.querySelectorAll('.questions__content');






// questTrig.forEach(function (item) {
//   item.addEventListener('click', function () {
//     const parent = item.parentNode;

//     if (parent.classList.contains('questions__item--active')) {
//       parent.classList.remove('questions__item--active')
//     } else {
//       questItem.forEach(function (child) {
//         child.classList.remove('questions__item--active')
//       })

//       parent.classList.add('questions__item--active')
//     }

//   });
// });



// const modalBtn = document.querySelectorAll('.modal-btn')
// const modalContent = document.querySelector('.modal')
// const modalClose = document.querySelector('.modal__close')

// modalBtn.forEach(function (item) {
//   item.addEventListener('click', function () {
//     modalContent.classList.add('modal--active');
//     document.body.classList.add('page-scroll')
//   })
// })

// modalClose.addEventListener('click', function () {
//   modalContent.classList.remove('modal--active')
//   document.body.classList.remove('page-scroll')
// })



// const menuBtn = document.querySelectorAll('.menu-burger')
// const menuContent = document.querySelector('.header-top-menu')



// menuBtn.forEach(function(item) {
//   item.addEventListener('click', function() {
//     item.classList.toggle('menu-burger-open')

//     menuContent.classList.toggle('header-top-menu--open')

//     if (item.classList.contains('menu-burger-open')) {
//       document.body.classList.add('page-scroll')
//     } else {
//       document.body.classList.remove('page-scroll')
//     }

//   })
// })


const progress = document.querySelector('.progress');

window.addEventListener('scroll', progressBar);

function progressBar(e) {
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop
  let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  let per = windowScroll / windowHeight * 100

  

  progress.style.width = per + '%'
  
}


const offset = 500;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = `stroke-dashoffset 20ms`;


const getTop = () => window.pageYOffset || document.documentElement.scrollTop; 

console.log(getTop)

const updateDashoffset = () => {
  
  const height = document.documentElement.scrollHeight - window.innerHeight
  const dashoffset = pathLength - (getTop() * pathLength / height)

  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};


window.addEventListener('scroll', () => {
  updateDashoffset();
  if ( getTop() > offset) {
    scrollUp.classList.add('scroll-up--active')
  } else{
    scrollUp.classList.remove('scroll-up--active')
  }
});


scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
});