import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Content from './main/Content';

const Routes = () => (
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/:uid/details/:tid" component={Content} />
    </div>
  </Router>
);

export default Routes;