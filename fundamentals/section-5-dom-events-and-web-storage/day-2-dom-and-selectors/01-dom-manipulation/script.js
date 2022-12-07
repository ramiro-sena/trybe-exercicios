const changeDescription = () => document.getElementsByTagName('p')[0].innerText = 'Me vejo daqui a 2 anos trabalhando com Desenvolvimento Web de maneira remota.';
const changeYellowSquareColor = () => document.getElementsByClassName('main-content')[0].style["background-color"] = 'rgb(76,164,109)'
const changeRedSquareColor = () => document.getElementsByClassName('center-content')[0].style["background-color"] = 'white'
const changeTitle = () => {
  let title = document.getElementsByTagName('h1')[0].innerText;
  document.getElementsByTagName('h1')[0].innerHTML = title.toUpperCase();
}


changeDescription();
changeYellowSquareColor();
changeRedSquareColor();
changeTitle();