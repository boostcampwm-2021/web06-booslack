import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/';
import 'jest-styled-components';
import axios from 'axios';
import BrowseChannelList from '@organisms/BrowseChannelList';
import Login from '@pages/Login';
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

describe('page rendering test />', () => {
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
        description: '12321321',
      },
    ];

    mockedAxios.get.mockResolvedValue({ data: { channels } });

    expect(axios.get).not.toHaveBeenCalled();

    render(
      <DefaultEnvironment initializeState={undefined}>
        <BrowseChannelList />
      </DefaultEnvironment>,
    );

    const header = await waitFor(() => screen.getByText('12321321'));
    expect(axios.get).toHaveBeenCalled();
    expect(header).toBeInTheDocument();
  });
});
