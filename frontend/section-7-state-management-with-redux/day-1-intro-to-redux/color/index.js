import { legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function createColor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let color = '#';
  const random = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      color += oneChar[random()];
  }
  return color;
}

const reducer = (state = INITIAL_STATE, action) => {
  switch ( action.type ) {
    case 'PREVIOUS_COLOR' :
      return { ...state, index: Math.max(state.index - 1, 0)}
    case 'NEXT_COLOR' :
      return { ...state, index: Math.min(state.index + 1, state.colors.length - 1)}
    case 'RANDOM_COLOR' :
      return { ...state, index: state.colors.length, colors: [...state.colors, action.color]}  
    default: return state
  }
}

const store = createStore(reducer, composeWithDevTools())

const nxtBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#previous')
const valueLbl = document.querySelector('#value')
const randomBtn = document.querySelector('#random')

nxtBtn.addEventListener('click', () => {
  console.log('next button clicked')
  store.dispatch({ type: 'NEXT_COLOR' })
})
prevBtn.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' })
})
randomBtn.addEventListener('click', () => {
  const color = createColor();
  store.dispatch({ type: 'RANDOM_COLOR', color })
})

const render = () => {
  const { index, colors } = store.getState()
  valueLbl.innerHTML = colors[index]
  document.querySelector('#container').style.backgroundColor = colors[index]
}

store.subscribe(render)

