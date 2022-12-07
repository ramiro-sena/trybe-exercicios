const changeDescription = () => document.getElementsByTagName('p')[0].innerText = 'Me vejo daqui a 2 anos trabalhando com Desenvolvimento Web de maneira remota.';
const changeYellowSquareColor = () => document.getElementsByClassName('main-content')[0].style["background-color"] = 'rgb(76,164,109)'
const changeRedSquareColor = () => document.getElementsByClassName('center-content')[0].style["background-color"] = 'white'



changeDescription();
changeYellowSquareColor();
changeRedSquareColor();