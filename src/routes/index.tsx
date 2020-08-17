import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Signup from '../pages/Signup';
import RegisterFinish from '../pages/RegisterFinish';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={Signup} />
      <Route path="/register-finished" component={RegisterFinish} />
    </Switch>
  );
};

export default Routes;
