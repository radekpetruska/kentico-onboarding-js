import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

var reduxStore = createStore(rootReducer);

ReactDOM.render((
  <Provider store={reduxStore}>
    <App />
  </Provider>),
  document.getElementById('app-root')
);
