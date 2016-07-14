import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import FileImporterPage from './components/fileImporter/FileImporterPage';
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={FileImporterPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
