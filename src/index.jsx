/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from 'store/configureStore';
import routes from 'routes';
import styles from 'global.css'; // eslint-disable-line
import DevTools from 'DevTools';

const store = configureStore();

render(
  <Provider store={ store }>
    <div>
      <Router
        history={ browserHistory }
        routes={ routes } />
      { __DEV__ && <DevTools /> }
    </div>
  </Provider>,
  document.getElementById('app')
);
