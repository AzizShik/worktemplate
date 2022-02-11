window.addEventListener('load', () => {
  const burgerBtn = document.querySelector('.header__burger');
  const headerNav = document.querySelector('.header__nav');
  const bodyEl = document.querySelector('body');

  burgerBtn.addEventListener('click', () => {
    menuToggle();
  });

  function menuToggle() {
    bodyEl.classList.toggle('lock');
    burgerBtn.classList.toggle('header__burger--close');
    if (headerNav.classList.contains('header__nav--active')) {
      let anim = headerNav.querySelector('.header__list').animate([{
          opacity: 1,
          transform: 'translateX(0%)',
          borderRadius: '0px'
        },
        {
          opacity: 0,
          transform: 'translateX(-50%)',
        }
      ], {
        duration: 250
      });
      anim.addEventListener('finish', () => {
        headerNav.classList.remove('header__nav--active');
      });
    } else {
      headerNav.classList.add('header__nav--active');
    }
  }

  headerNav.addEventListener('click', (e) => {
    const el = e.target;

    if(el.classList.contains('header__nav')) {
      menuToggle();
    }

    if (el.nodeName.toLowerCase() === 'a') {
      e.preventDefault();
      menuClose();
      const anchor = document.querySelector(el.hash);
      window.scrollTo({
        top: anchor.offsetTop,
        behavior: 'smooth',
      });
    }
  });

  function menuClose() {
    bodyEl.classList.remove('lock');
    headerNav.classList.remove('header__nav--active');
    burgerBtn.classList.remove('header__burger--close');
  }



});