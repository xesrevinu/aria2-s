import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import IndexPage from './containers/index';
import ConnectionPage from './containers/connection';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage} />
    <Route path="/connection/:name" component={ConnectionPage} />
  </Route>
);
