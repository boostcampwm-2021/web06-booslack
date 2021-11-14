import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/';
import 'jest-styled-components';

import Login from '@pages/Login';
import WorkspaceList from '@pages/WorkspaceList';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const DefaultEnvironment = ({ children }: { children: JSX.Element }) => {
  return (
    <RecoilRoot>
      <BrowserRouter>{children}</BrowserRouter>
    </RecoilRoot>
  );
};

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
});
