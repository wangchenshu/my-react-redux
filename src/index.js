import React from 'react';
import {StoreContext} from 'redux-react-hook';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import { createStore } from 'redux'
import reducer from './reducers/index'
import Counter from './Counter';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer)

ReactDOM.render(
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,
  <StoreContext.Provider value={store}>
    <Counter />
  </StoreContext.Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
