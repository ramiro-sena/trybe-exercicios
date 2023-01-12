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

validateForm = (e) => {
  const name_len = document.querySelector('#full-name').value.length;
  const val_name = name_len > 10 && name_len < 50;
  
  

  console.log(val_name)
}

window.onload = () => {
  clear.addEventListener('click', handleClear);
  consent.addEventListener('change', handleConsent);
  submit.addEventListener('click', validateForm);
}
