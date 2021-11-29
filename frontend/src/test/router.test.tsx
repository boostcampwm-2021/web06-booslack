import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/';
import 'jest-styled-components';
import axios from 'axios';
import PublicRoute from '@routes/PublicRoute';
import DefaultEnvironment from './DefaultEnvironment';
import userState from '@state/user';
import App from '../App';
import { Route, Router, Switch } from 'react-router';
import Login from '@pages/Login';
import { createMemoryHistory } from 'history';
import Signup from '@pages/Signup';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ReactDOM.createPortal = (node) => node;

afterEach(() => {
  jest.clearAllMocks();
});
afterEach(cleanup);

describe('router test />', () => {
  it('router test for /', () => {
    //const initializeState = ({ set }) => {
    //  set(userState, { account: 'loda', id: 1, theme: 1 });
    //};

    const history = createMemoryHistory();
    history.push('/login');

    const { getByText } = render(
      <DefaultEnvironment initializeState={null}>
        <Router history={history}>
          <Switch>
            <PublicRoute component={Login} path="/login" />
            <PublicRoute component={Signup} path="/signup" />
          </Switch>
        </Router>
      </DefaultEnvironment>,
    );
    expect(getByText(/booslack/i)).toBeInTheDocument();
  });

  it('router test for /signup', () => {
    const history = createMemoryHistory();
    history.push('/signup');

    const { getByText } = render(
      <DefaultEnvironment initializeState={null}>
        <Router history={history}>
          <Switch>
            <PublicRoute component={Login} path="/login" />
            <PublicRoute component={Signup} path="/signup" />
          </Switch>
        </Router>
      </DefaultEnvironment>,
    );
    expect(getByText(/booslack/i)).toBeInTheDocument();
  });

  /*
  it('router test for /app', () => {
    const history = createMemoryHistory();
    history.push('/signup');

    const { getByText } = render(
      <DefaultEnvironment initializeState={null}>
        <Router history={history}>
          <Switch>
            <App />
          </Switch>
        </Router>
      </DefaultEnvironment>,
    );
    expect(getByText(/booslack/i)).toBeInTheDocument();
  });
  */
});
