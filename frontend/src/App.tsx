import React from 'react';

import Workspace from '@pages/Workspace';
import Login from '@pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
