//01 Add h1 tag

const bodyElement = document.getElementsByTagName('body')[0];
const titleElement = document.createElement('h1')
titleElement.innerText = 'TrybeTrip - Agência de Viagens';
bodyElement.appendChild(titleElement);

//02 Add main tag

const main = document.createElement('main');
bodyElement.appendChild(main);