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

//04 Add section tag with right-content class

const sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);