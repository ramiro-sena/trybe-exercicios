import { legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'

const INITIAL_STATE = {count: 0}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}

const store = createStore(reducer, composeWithDevTools())


const render = () => {
  const count = document.querySelector('#count')
  count.innerHTML = store.getState().count
}
store.subscribe(render)

const incrementBtn = document.querySelector('#increment')
const decrementBtn = document.querySelector('#decrement')
incrementBtn.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' })
});
decrementBtn.addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' })
});

