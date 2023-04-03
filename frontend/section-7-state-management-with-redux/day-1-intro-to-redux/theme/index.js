import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = {
  status: 'Offline',
  theme: 'dark',
};

const reducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {

  case 'TOGGLE_THEME':
    return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
  case 'TOGGLE_STATUS':
    return { ...state, status: state.status === 'Offline' ? 'Online' : 'Offline' }
  default:
    return state
  }
}


const store = createStore(reducer, composeWithDevTools());


const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch({ type: 'TOGGLE_THEME' });
});

statusButton.addEventListener('click', () => {
  store.dispatch({ type: 'TOGGLE_STATUS' })
});

const render = () => {
  const { theme, status } = store.getState();
  document.body.className = theme;

  const statusText = document.querySelector('#status')

  statusText.innerHTML = status;
  statusButton.innerHTML = `Ficar ${status === 'Online' ? 'Offline' : 'Online'}`;

  themeButton.innerHTML = `${theme === 'dark' ? 'light' : 'dark'} Mode`;
}

store.subscribe(render);