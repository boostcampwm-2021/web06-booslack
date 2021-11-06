import React from 'react';

import Workspace from '@pages/Workspace';
import Login from '@pages/Login';
import BrowseChannel from '@pages/BrowseChannel';
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
        <Route exact path="/client/:channelName">
          <Workspace />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/changepassword">
          <Changepassword />
        </Route>
        <Route path="/browsechannel">
          <BrowseChannel />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
