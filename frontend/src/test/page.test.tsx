import React from 'react';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/';
import 'jest-styled-components';

import Login from '@pages/Login';
import WorkspaceList from '@pages/WorkspaceList';
import axios from 'axios';
import BrowseChannelList from '@organisms/BrowseChannelList';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const DefaultEnvironment = ({ children }: { children: JSX.Element }) => {
  return (
    <RecoilRoot>
      <BrowserRouter>{children}</BrowserRouter>
    </RecoilRoot>
  );
};

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
      <DefaultEnvironment>
        <Login />
      </DefaultEnvironment>,
    );
    const header = getByText('booslack');
    expect(header).toBeInTheDocument();
  });

  it('workspacelist page', async () => {
    const data = {
      id: 2,
      nickname: 'lodado',
      email: 'https://blog.naver.com/ycp998',
      type: 'github',
      password: '',
    };

    mockedAxios.post.mockResolvedValue({ data: { ...data } });

    expect(axios.post).not.toHaveBeenCalled();

    render(
      <DefaultEnvironment>
        <WorkspaceList />
      </DefaultEnvironment>,
    );

    const header = await waitFor(() => screen.getByText('booslack'));
    expect(axios.post).toHaveBeenCalled();
    expect(header).toBeInTheDocument();
  });

  it('browseChannel page', async () => {
    const channels = [
      {
        id: 1,
        name: 'lodado',
        type: 'public',
        description: '12321321',
      },
    ];

    mockedAxios.get.mockResolvedValue({ data: { channels } });

    expect(axios.get).not.toHaveBeenCalled();

    render(
      <DefaultEnvironment>
        <BrowseChannelList />
      </DefaultEnvironment>,
    );

    const header = await waitFor(() => screen.getByText('12321321'));
    expect(axios.get).toHaveBeenCalled();
    expect(header).toBeInTheDocument();
  });
});
