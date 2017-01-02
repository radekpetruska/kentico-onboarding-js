import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const logger = createLogger();
var reduxStore = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render((
  <Provider store={reduxStore}>
    <App />
  </Provider>),
  document.getElementById('app-root')
);
