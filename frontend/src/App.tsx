import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Login = (): JSX.Element => {
  return <h2>Home</h2>;
};

const WorkSpace = (): JSX.Element => {
  return <h2>About</h2>;
};

const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/workspace">
          <WorkSpace />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
