import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import RegisterFinish from '../pages/RegisterFinish';
import ForgotPassword from '../pages/ForgotPassword';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/register-finished" component={RegisterFinish} />
      <Route path="/forgot" component={ForgotPassword} />
    </Switch>
  );
};

export default Routes;
