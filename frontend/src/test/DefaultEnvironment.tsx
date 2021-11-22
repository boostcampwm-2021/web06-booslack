/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import themeState from '@state/Theme';
import { Itheme } from '@global/theme';
import { ThemeProvider } from 'styled-components';

const queryClient = new QueryClient();

const DefaultEnvironment = ({
  children,
  initializeState,
}: {
  children: JSX.Element;
  initializeState: any;
}) => {
  const SetTheme = ({ context }: { context: JSX.Element }): JSX.Element => {
    const currentTheme = useRecoilValue<Itheme>(themeState);

    return <ThemeProvider theme={currentTheme}>{context}</ThemeProvider>;
  };

  const Component = (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  );

  return (
    <RecoilRoot initializeState={initializeState ?? null}>
      <SetTheme context={Component} />
    </RecoilRoot>
  );
};

export default DefaultEnvironment;
