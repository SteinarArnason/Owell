import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'components/App';
import AboutPage from 'components/about/AboutPage';
import HomePage from 'components/home/HomePage';
import TodoPage from 'components/todo/TodoPage';
import CarPage from 'components/car/CarPage';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage } />
    <Route path="todo-list" component={ TodoPage } />
    <Route path="car" component={ CarPage } />
    <Route path="about" component={ AboutPage } />
  </Route>
);
