/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import routes from './routes';
import './styles/styles.css';
import DevTools from './DevTools';

const store = configureStore();

render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory} routes={routes} />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);