import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import Bluebird from 'bluebird'
import { Provider } from 'react-redux'

// Router
import AppRoutes from './routes'

import './index.css';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './redux/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

window.Promise = Bluebird

Bluebird.config({
  warnings: false
})

window.addEventListener('unhandledrejection', error => {
  error.preventDefault()

  if(process.env.NODE_ENV !== 'production') {
    console.warn('Unhandled promise rejection warning.', error.detail)
  }
})

// const store = configStore({
//   initialState: window.initialState || {}
// }, rootReducer)

//Store creation
const store = createStore(
  combineReducers({
    auth: reducer
  }),
  composeEnhancers(applyMiddleware(reduxThunk))
);

render(
  <Provider store={ store }>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
