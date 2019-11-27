import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import FormContainer from './containers/Form.container';
import Content from './main/Content';

const Routes = () => (
  <Router>
    <div>
      <Route path="/" exact component={FormContainer} />
      <Route path="/:uid" component={Content} />
      <Route path="/:uid/details/:tid" component={Content} />
    </div>
  </Router>
);

export default Routes;