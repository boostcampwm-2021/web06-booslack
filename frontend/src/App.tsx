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
          <PublicRoute Page={Login} path="/login" />
          <PublicRoute Page={Signup} path="/signup" />
          <PrivateRoute Page={WorkspaceList} path="/workspacelist" />
          <PrivateRoute Page={SetupTeam} path="/setupteam" />
          <PrivateRoute Page={Workspace} path="/client/:channelId" />
          <PrivateRoute Page={BrowseChannel} path="/browsechannel" />
          <PrivateRoute Page={InvitedCode} path="/invitecode" />
          <PrivateRoute Page={GeneratedCode} path="/generatecode" />
          <TotalRoute Page={NotLogin} path="/notlogin" />
          <TotalRoute Page={NotLogout} path="/notlogout" />
          <TotalRoute Page={Changepassword} path="/changepassword" />
          <TotalRoute Page={NotFound} path="*" />
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
