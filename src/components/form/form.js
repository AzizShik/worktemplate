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