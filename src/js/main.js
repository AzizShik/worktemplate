var selector = document.getElementsByClassName("phone-mask");

var im = new Inputmask("(999)-999-99-99");
im.mask(selector);


    //============= dynamic placeholder for images

    const placeholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
    const targets = document.querySelectorAll('[data-src]');
    targets.forEach(target => {
        target.src = placeholder;
    });

    //============= IntersectionObserver

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.05
    };

    const loadImage = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.parentNode.classList.contains('loading')){
                entry.target.src = entry.target.getAttribute('data-src');
                entry.target.onload = () => {
                    entry.target.parentNode.classList.remove('loading');
                    entry.target.removeAttribute('data-src');
                };
            }
        });
    };

    const observer = new IntersectionObserver(loadImage, options);
    targets.forEach(target => {
        observer.observe(target);
    });





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



const ham = document.querySelector('.ham');
const menuBody = document.querySelector('.header-menu__body');
const menuHam = document.querySelector('.header-menu__burger');
const menuList = document.querySelector('.header-menu__list');

menuBody.addEventListener('click', function(e){
  
  if(!e.target.closest('.header-menu__list')){
    ham.classList.remove('active-burger');
    hamRemove()
  }
});

  ham.addEventListener('click', function(){
    ham.classList.toggle('active-burger');

  if(ham.classList.contains('active-burger')){
    hamActive();
    menuList.addEventListener('click', function(e){
      if(e.target.closest('.header-menu__li')){
          ham.classList.remove('active-burger');
          hamRemove();
      }
    });
    
  } else{
    hamRemove();
  }
});

function hamActive(){
    menuBody.classList.add('menu--active');
    document.documentElement.style.overflowY = 'hidden';
    document.documentElement.classList.add('page-scroll');
    menuHam.style.right = '37px';
}
 function hamRemove(){
    menuBody.classList.remove('menu--active');
    document.documentElement.style.overflowY = 'auto';
    document.documentElement.classList.remove('page-scroll');
    menuHam.style.right = '20px';
}

const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors){
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}



const offset = 500;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = `stroke-dashoffset 20ms`;


const getTop = () => window.pageYOffset || document.documentElement.scrollTop; 


const updateDashoffset = () => {
  
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength / height);

  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};


window.addEventListener('scroll', () => {
  updateDashoffset();
  if ( getTop() > offset) {
    scrollUp.classList.add('scroll-up--active');
  } else{
    scrollUp.classList.remove('scroll-up--active');
  }
});


scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});


// MODAL

const modal = document.querySelector('.modal');
const modalCloses = document.querySelectorAll('.modal__close');
const modalBtns = document.querySelectorAll('.modal-btn');

if(modalBtns.length > 0){
  for(let i = 0; i < modalBtns.length; i++){
    const modalBtn = modalBtns[i];

    modalBtn.addEventListener('click', function(){
      document.documentElement.classList.add('page-scroll');
      document.querySelector('.header-menu').classList.add('page-scroll');
      modal.classList.add('modal--active');
    }); 
  }
}

if(modalCloses.length > 0){
  for(let i = 0; i < modalCloses.length; i++){
    const modalClose = modalCloses[i];

    modalClose.addEventListener('click', function(){
      document.documentElement.classList.remove('page-scroll');
      document.querySelector('.header-menu').classList.remove('page-scroll');
      modal.classList.remove('modal--active');
    });
  }
}