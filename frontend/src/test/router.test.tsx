import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';
import '@testing-library/jest-dom/';
import 'jest-styled-components';
import { cleanup, render, screen } from '@testing-library/react';

import WorkspaceList from '@pages/WorkspaceList';
import Login from '@pages/Login';
import { createMemoryHistory } from 'history';
import NotFound from '@pages/NotFound';
import userState from '@state/user';
import PrivateRoute from '@routes/PrivateRoute';
import PublicRoute from '@routes/PublicRoute';
import DefaultEnvironment from './DefaultEnvironment';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ReactDOM.createPortal = (node) => node;

afterEach(() => {
  jest.clearAllMocks();
});
afterEach(cleanup);

describe('public router test', () => {
  it('router test for public test /', () => {
    const history = createMemoryHistory();
    history.push('/login');

    const { getByText } = render(
      <DefaultEnvironment initializeState={null}>
        <Router history={history}>
          <Switch>
            <PublicRoute component={Login} path="/login" />
          </Switch>
        </Router>
      </DefaultEnvironment>,
    );
    expect(getByText(/booslack/i)).toBeInTheDocument();
  });

  it('router test for notfound page', () => {
    const history = createMemoryHistory();
    history.push('/whereami?');
    const { getByText } = render(
      <DefaultEnvironment initializeState={null}>
        <Router history={history}>
          <Switch>
            <PublicRoute component={Login} path="/login" />
            <Route component={NotFound} path="*" />
          </Switch>
        </Router>
      </DefaultEnvironment>,
    );
    expect(getByText('404')).toBeInTheDocument();
  });

  it('should not enter public if you sign in', async () => {
    const initializeState = ({ set }) => {
      set(userState, { account: 'loda', id: 1, theme: 1 });
    };

    const history = createMemoryHistory();
    history.push('/login');

    const { getByText } = render(
      <DefaultEnvironment initializeState={initializeState}>
        <Router history={history}>
          <Switch>
            <PublicRoute component={Login} path="/login" />
            <Route component={NotFound} path="*" />
          </Switch>
        </Router>
      </DefaultEnvironment>,
    );

    expect(getByText('404')).toBeInTheDocument();
  });
});

describe('private router test', () => {
  it('should not enter private if you do not sign in', async () => {
    const history = createMemoryHistory();
    history.push('/workspacelist');

    const { getByText } = render(
      <DefaultEnvironment initializeState={null}>
        <Router history={history}>
          <Switch>
            <PrivateRoute component={WorkspaceList} path="/workspacelist" />
            <Route component={NotFound} path="*" />
          </Switch>
        </Router>
      </DefaultEnvironment>,
    );

    expect(getByText('404')).toBeInTheDocument();
  });

  it('should enter private if you sign in', async () => {
    const history = createMemoryHistory();
    const initializeState = ({ set }) => {
      set(userState, { account: 'loda', id: 1, theme: 1 });
    };
    history.push('/workspacelist');

    render(
      <DefaultEnvironment initializeState={initializeState}>
        <Router history={history}>
          <Switch>
            <PrivateRoute component={WorkspaceList} path="/workspacelist" />
          </Switch>
        </Router>
      </DefaultEnvironment>,
    );

    expect(screen.getByText(/loda/i)).toBeInTheDocument();
  });
});
