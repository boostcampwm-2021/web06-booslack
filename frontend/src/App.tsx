import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Workspace from '@pages/Workspace';
import Login from '@pages/Login';
import BrowseChannel from '@pages/BrowseChannel';
import Signup from '@pages/Signup';
import Changepassword from '@pages/Changepassword';
import WorkspaceList from '@pages/WorkspaceList';
import NotFound from '@pages/NotFound';
import theme from '@global/theme';
import GlobalStyle from './style';

const App = (): JSX.Element => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme.yellowTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/workspacelist">
              <WorkspaceList />
            </Route>
            <Route exact path="/client/:channelId">
              <Workspace />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/changepassword">
              <Changepassword />
            </Route>
            <Route path="/browsechannel">
              <BrowseChannel />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
