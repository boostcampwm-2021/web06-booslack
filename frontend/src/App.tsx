import React, { useState, useEffect } from 'react';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
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
import axios from 'axios';
import userState from '@state/user';

const ThemeContainer = (): JSX.Element => {
  const currentTheme = useRecoilValue<Itheme>(themeState);
  const [isLoading, setIsLoading] = useState(true);
  const setUserState = useSetRecoilState(userState);

  useEffect(() => {
    const getLoginStatus = async () => {
      const res = await axios.get('/api/login/info');
      setUserState(res.data);
      setIsLoading(false);
    };
    getLoginStatus();
  }, []);

  return isLoading ? (
    <div>loading</div>
  ) : (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/workspacelist" />
          </Route>
          <PublicRoute component={Login} path="/login" />
          <PublicRoute component={Signup} path="/signup" />
          <PrivateRoute component={WorkspaceList} path="/workspacelist" />
          <PrivateRoute component={SetupTeam} path="/setupteam" />
          <PrivateRoute component={Workspace} path="/client/:channelId" />
          <PrivateRoute component={BrowseChannel} path="/browsechannel" />
          <PrivateRoute component={InvitedCode} path="/invitecode" />
          <PrivateRoute component={GeneratedCode} path="/generatecode" />
          <Route component={NotLogin} path="/notlogin" />
          <Route component={NotLogout} path="/notlogout" />
          <Route component={Changepassword} path="/changepassword" />
          <Route component={NotFound} path="*" />
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
