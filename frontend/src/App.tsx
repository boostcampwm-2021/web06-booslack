import React from 'react';

import Workspace from '@pages/Workspace';
import Login from '@pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from '@pages/Signup';
import Changepassword from '@pages/Changepassword';

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
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/changepassword">
          <Changepassword />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
