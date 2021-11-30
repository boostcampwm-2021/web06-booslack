import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/';
import 'jest-styled-components';
import WorkspaceList from '@pages/WorkspaceList';
import userState from '@state/user';
import DefaultEnvironment from './DefaultEnvironment';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ReactDOM.createPortal = (node) => node;

afterEach(() => {
  jest.clearAllMocks();
  cleanup();
  jest.resetModules();
});

describe('workspacelist page render test', () => {
  it('list basic', async () => {
    const testindexCount = Math.ceil(Math.random() * 9);
    const workspaces = new Array(testindexCount)
      .fill(null)
      .map((ele, index) => {
        return {
          id: index,
          name: `test hello${index + 1}`,
        };
      });

    mockedAxios.get.mockResolvedValue({
      data: {
        files: {
          url: '',
        },
        workspaces,
        nextCursor: 10,
      },
    });

    expect(mockedAxios.get).not.toHaveBeenCalled();

    const initializeState = ({ set }) => {
      set(userState, { account: 'loda', id: 1, theme: 1 });
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
