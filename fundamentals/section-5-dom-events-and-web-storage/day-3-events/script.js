const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holidaysList = [24, 25, 31];
const frydayList = [4,11,18,24];
const monthDaysList = document.querySelector('.days-container')
const createDaysOfTheMonth = () => {
  const ulElement = document.createElement('ul');
  ulElement.id = 'days';
  for (let day of decemberDaysList){
    const liElement = document.createElement('li');
    liElement.innerText = day;
    liElement.className = 'day';
    if(holidaysList.indexOf(day) !== -1){
      liElement.className += ' holiday';
    }
    if(frydayList.indexOf(day) !== -1){
      liElement.className += ' friday';
    }
    ulElement.appendChild(liElement);
  }
  monthDaysList.appendChild(ulElement);
}


createDaysOfTheMonth();