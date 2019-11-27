import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import FormContainer from './containers/Form.container';
import TweetContainer from './containers/Tweets.container';
import Content from './main/Content';

const Routes = () => (
  <Router>
    <div>
      <Route path="/" exact component={FormContainer} />
      <Route path="/:uid/tweets" exact component={TweetContainer} />
      <Route path="/:uid/tweets/:tid" component={Content} />
    </div>
  </Router>
);

export default Routes;