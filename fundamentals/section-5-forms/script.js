const form = document.querySelector('form');
const submit = document.querySelector('#submit');
const clear = document.querySelector('#clear');
const fieldSet = document.querySelector('fieldset');

handleClear = () => {
  e.preventDefault();
}



window.onload = () => {
  clear.addEventListener('click', handleClear);

}
