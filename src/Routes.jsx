import React from 'react';
import {Route, Router, browserHistory} from 'react-router';
import Main from './main/Main';

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Main} />
    </Router>
  );
};
