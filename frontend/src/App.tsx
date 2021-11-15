import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Workspace from '@pages/Workspace';
import BrowseChannel from '@pages/BrowseChannel';
import Signup from '@pages/Signup';
import Changepassword from '@pages/Changepassword';
import WorkspaceList from '@pages/WorkspaceList';
import NotFound from '@pages/NotFound';
import SetupTeam from '@pages/SetupTeam';
import NotLogin from '@pages/NotLogin';
import NotLogout from '@pages/NotLogout';
import themeState from '@state/Theme';
import { Itheme } from '@global/theme';
import InvitedCode from '@pages/InvitedCode';
import GeneratedCode from '@pages/GeneratedCode';
import PublicRoute from '@global/util/routes/PublicRoute';
import Login from '@pages/Login';
import PrivateRoute from '@global/util/routes/PrivateRoute';
import TotalRoute from '@global/util/routes/TotalRoute';
import GlobalStyle from './global/globalstyle';

const ThemeContainer = (): JSX.Element => {
  const currentTheme = useRecoilValue<Itheme>(themeState);
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <PublicRoute page={Login} path="/login" />
          <PublicRoute page={Signup} path="/signup" />
          <PrivateRoute page={WorkspaceList} path="/workspacelist" />
          <PrivateRoute page={SetupTeam} path="/setupteam" />
          <PrivateRoute page={Workspace} path="/client/:channelId" />
          <PrivateRoute page={BrowseChannel} path="/browsechannel" />
          <PrivateRoute page={InvitedCode} path="/invitecode" />
          <PrivateRoute page={GeneratedCode} path="/generatecode" />
          <TotalRoute page={NotLogin} path="/notlogin" />
          <TotalRoute page={NotLogout} path="/notlogout" />
          <TotalRoute page={Changepassword} path="/changepassword" />
          <TotalRoute page={NotFound} path="*" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const App = (): JSX.Element => {
  return (
    <RecoilRoot>
      <ThemeContainer />
    </RecoilRoot>
  );
};

export default App;
