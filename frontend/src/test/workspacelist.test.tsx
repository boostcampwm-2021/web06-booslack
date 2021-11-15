import React from 'react';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/';
import 'jest-styled-components';
import axios from 'axios';
import WorkspaceList from '@pages/WorkspaceList';

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

    render(
      <DefaultEnvironment>
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
