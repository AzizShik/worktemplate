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

    if (el.classList.contains('header__nav')) {
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




  const formEl = document.querySelector('.form__body'),
    formInputs = document.querySelectorAll('.form__body-input');


  const patterns = {
    notEmpty: /.+/,
    phone: /^\d{7,14}$/,
    email: /^.+@.+\..+$/,
  }

  formEl.addEventListener('input', (e) => {
    e.target.classList.remove('form__body-input--danger');
  });

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    submitHandler(e);
  });

  function submitHandler(e) {
    let isSend = false;
    formInputs.forEach(input => {
      let pattern = patterns[input.dataset.valid];
      input.value = input.value.trim();
      if (!pattern.test(input.value)) {
        e.preventDefault();
        input.classList.add('form__body-input--danger');
      } else {
        input.value = '';
        isSend = true;
      }
    });

    if (isSend) {
      const formSubmit = document.createElement('div');
      formSubmit.classList.add('form__body-thanks');
      formSubmit.textContent = `Thanks for the application! We will contact you shortly.`;
      formEl.insertAdjacentElement('afterend', formSubmit);
    }
  }





});