//01 Add h1 tag

const bodyElement = document.getElementsByTagName('body')[0];
const titleElement = document.createElement('h1')
titleElement.innerText = 'TrybeTrip - Agência de Viagens';
bodyElement.appendChild(titleElement);

//02 Add main tag

const main = document.createElement('main');
bodyElement.appendChild(main);

//03 Add section tag with center-content class

const section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

//04 Add p tag as section child
const pTag = document.createElement('p');
pTag.innerText = 'Some text';
section.appendChild(pTag)

//05 Add section tag with right-content class

const sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);

//06 Add section tag with left-content class

const sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);

//07 Add image

const image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
sectionLeft.appendChild(image);

//08 Add unsorted list

const unsortedList = document.createElement('ul');

const numbers = [
  'um',
  'dois',
  'três',
  'quatro',
  'cinco',
  'seis',
  'sete',
  'oito',
  'nove',
  'dez'];

for (let i = 1; i <= 10; i++) {
  let li = document.createElement('li');
  li.innerText = numbers[i - 1];
  unsortedList.appendChild(li);
}
sectionRight.appendChild(unsortedList);