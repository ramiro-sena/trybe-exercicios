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

// ------------- PARTE 1

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holidaysList = [24, 25, 31];
const fridayList = [4, 11, 18, 25];
const monthDaysList = document.querySelector('.days-container')
const createDaysOfTheMonth = () => {
  const ulElement = document.createElement('ul');
  ulElement.id = 'days';
  for (let day of decemberDaysList) {
    const liElement = document.createElement('li');
    liElement.innerText = day;
    liElement.className = 'day';
    if (holidaysList.indexOf(day) !== -1) {
      liElement.className += ' holiday';
    }
    if (fridayList.indexOf(day) !== -1) {
      liElement.className += ' friday';
    }
    ulElement.appendChild(liElement);
  }
  monthDaysList.appendChild(ulElement);
}


createDaysOfTheMonth();


// --------------- PARTE 2

const createButtons = (button_name, button_id) => {
  const buttonElement = document.createElement('button');
  buttonElement.innerText = button_name;
  buttonElement.id = button_id;
  const buttonsContainer = document.querySelector('.buttons-container');
  buttonsContainer.appendChild(buttonElement);
}

createButtons('Feriados', 'btn-holiday');

// ---------------- PARTE 3

const onClickHoliday = () => {
  const elements = document.querySelectorAll('.holiday');

  const color = elements[0].style.backgroundColor !== 'rgb(255, 180, 180)' ? 'rgb(255, 180, 180)' : 'rgb(238,238,238)'
  for (let element of elements) {
    element.style.backgroundColor = color;
  }
}


document.querySelector('#btn-holiday').addEventListener('click', onClickHoliday);

// ---------------- PARTE 4

createButtons('Sexta-feira', 'btn-friday')

// ---------------- PARTE 5

const fridayEl = document.querySelectorAll('.friday');

const onClickFriday = () => {
  const string = 'Sextouu!!'
  for (let i in fridayEl) {
    fridayEl[i].innerText = fridayEl[i].innerText === string ? fridayList[i] : string;
  }
}

document.querySelector('#btn-friday').addEventListener('click', onClickFriday)


// ---------------- PARTE 6

const zoomed_size = '25px'

const days_container = document.querySelector('.days-container');
const onMouseHover = (event) => {
  if (event.target.tagName == 'LI') {
    event.target.style.fontSize = '35px';
    console.log(event.target.style)
  }

};
const onMouseOut = (event) => {
  if (event.target.tagName == 'LI') {
    event.target.style.fontSize = '';
    console.log(event.target.style)
  }

}


days_container.addEventListener('mouseout', onMouseOut)
days_container.addEventListener('mouseover', onMouseHover);


// ---------------- PARTE 7

const addCustomTask = (task_name) => {
  const taskElement = document.createElement('span');
  taskElement.innerText = task_name;
  document.querySelector('.my-tasks').appendChild(taskElement);
}

// ---------------- PARTE 8

const addTaskNote = (color) => {
  const container = document.createElement('div');
  container.className = 'task';
  
}
