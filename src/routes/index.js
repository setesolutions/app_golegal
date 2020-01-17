import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import ListContract from '../pages/ListContract';
import Contract from '../pages/Contract';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/listcontract" component={ListContract} isPrivate />
      <Route path="/contract" component={Contract} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
