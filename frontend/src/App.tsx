import React from 'react';

import Workspace from '@pages/Workspace';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Login = (): JSX.Element => {
  return <h2>Home</h2>;
};

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/workspace">
          <Workspace />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
