import React from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/';
import 'jest-styled-components';

import WorkspaceList from '@pages/WorkspaceList';
import userState from '@state/user';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const queryClient = new QueryClient();

const DefaultEnvironment = ({
  children,
  initializeState,
}: {
  children: JSX.Element;
  initializeState: any;
}) => {
  return (
    <RecoilRoot initializeState={initializeState ?? null}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
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

describe('workspacelist page render test', () => {
  it('workspacelist page list', async () => {
    const testindexCount = Math.ceil(Math.random() * 9);
    const workspaces = new Array(testindexCount)
      .fill(null)
      .map((ele, index) => {
        return {
          id: index,
          name: `test hello${index + 1}`,
        };
      });

    mockedAxios.get.mockResolvedValue({ data: { workspaces } });

    expect(mockedAxios.get).not.toHaveBeenCalled();

    const initializeState = ({ set }) => {
      set(userState, { nickname: 'loda' });
    };

    render(
      <DefaultEnvironment initializeState={initializeState}>
        <WorkspaceList />
      </DefaultEnvironment>,
    );

    const header = await waitFor(() => {
      return screen.getByText(`test hello${testindexCount}`);
    });
    expect(mockedAxios.get).toHaveBeenCalled();
    expect(header).toBeInTheDocument();
  });
});
