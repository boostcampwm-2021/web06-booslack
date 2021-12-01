import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/';
import 'jest-styled-components';
import axios from 'axios';
import BrowseChannelList from '@organisms/BrowseChannelList';
import GeneratedCode from '@pages/GeneratedCode';
import InvitedCode from '@pages/InvitedCode';
import Login from '@pages/Login';
import userState from '@state/user';
import DefaultEnvironment from './DefaultEnvironment';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ReactDOM.createPortal = (node) => node;

afterEach(() => {
  jest.clearAllMocks();
});
afterEach(cleanup);

describe('page rendering test', () => {
  it('login page', () => {
    const { getByText } = render(
      <DefaultEnvironment initializeState={null}>
        <Login />
      </DefaultEnvironment>,
    );
    const header = getByText('booslack');
    expect(header).toBeInTheDocument();
  });

  it('browseChannel page', async () => {
    const channels = [
      {
        id: 1,
        account: 'lodado',
        private: 0,
        description: 'imlodado',
      },
    ];

    const initializeState = ({ set }) => {
      set(userState, { account: 'loda', id: 1 });
    };

    mockedAxios.get.mockResolvedValue({ data: { channels } });

    expect(axios.get).not.toHaveBeenCalled();

    render(
      <DefaultEnvironment initializeState={initializeState}>
        <BrowseChannelList />
      </DefaultEnvironment>,
    );

    const header = await waitFor(() => screen.getByText('imlodado'));
    expect(axios.get).toHaveBeenCalled();
    expect(header).toBeInTheDocument();
  });

  it('generatedCode page', async () => {
    const { container } = render(
      <DefaultEnvironment initializeState={null}>
        <MemoryRouter
          initialEntries={[
            {
              pathname: '/generatedCodePage',
              state: {
                data: { code: 'ABCDEF', nextPage: '/login' },
              },
            },
          ]}
        >
          <GeneratedCode />
        </MemoryRouter>
      </DefaultEnvironment>,
    );

    expect(container.querySelectorAll('input')[5].value).toBe('F');
  });

  it('invitedCode page', async () => {
    const { container } = render(
      <DefaultEnvironment initializeState={null}>
        <InvitedCode />
      </DefaultEnvironment>,
    );

    const inputs = container.querySelectorAll('input');

    expect(container.querySelectorAll('input')[5].value).toBe('');
    inputs[0].value = 'A';
    inputs[1].value = 'B';
    expect(container.querySelectorAll('input')[0].value).toBe('A');
    expect(container.querySelectorAll('input')[1].value).toBe('B');
    expect(container.querySelectorAll('input')[2].value).toBe('');
  });
});
