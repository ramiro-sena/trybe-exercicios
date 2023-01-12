const form = document.querySelector('form');
const submit = document.querySelector('#submit');
const clear = document.querySelector('#clear');
const fieldSet = document.querySelector('fieldset');
const consent = document.querySelector('#consent');

handleClear = (e) => {
  e.preventDefault();
}

handleConsent = (e) => {
  submit.disabled = !e.target.checked
}


window.onload = () => {
  clear.addEventListener('click', handleClear);
  consent.addEventListener('change', handleConsent)
}
