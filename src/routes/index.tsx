import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import RegisterFinish from '../pages/RegisterFinish';
import ForgotPassword from '../pages/ForgotPassword';
import PasswordRedefinitionFinished from '../pages/PasswordRedefinitionFinished';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/signup" component={SignUp} />
      <Route path="/register-finished" component={RegisterFinish} />

      <Route path="/forgot" component={ForgotPassword} />
      <Route
        path="/redefinition-finished"
        component={PasswordRedefinitionFinished}
      />

      <Route path="/home" component={Home} />

      <Route path="/profile" component={Profile} />
    </Switch>
  );
};

export default Routes;
