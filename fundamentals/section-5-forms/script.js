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

validateForm = () => {
  const name_len = document.querySelector('#full-name').value.length;
  const val_name = name_len > 10 && name_len < 50;
  
  const email_len = document.querySelector('#email').value.length;
  const val_email = name_len > 10 && name_len < 50;

  const answer_len = document.querySelector('#answer').value.length;
  const val_answer = name_len < 500;

  return val_name && val_email && val_answer
}



window.onload = () => {
  clear.addEventListener('click', handleClear);
  consent.addEventListener('change', handleConsent);
  submit.addEventListener('click', validateForm);
}
