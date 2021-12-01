import React, { useState, useEffect } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
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
import GetError from '@pages/GetError';
import Loading from '@pages/Loading';
import themeState from '@state/theme';
import { getThemeByIndex, Itheme } from '@global/style/theme';
import InvitedCode from '@pages/InvitedCode';
import GeneratedCode from '@pages/GeneratedCode';
import Login from '@pages/Login';
import userState from '@state/user';
import PrivateRoute from '@routes/PrivateRoute';
import PublicRoute from '@routes/PublicRoute';
import { getUserInfo } from '@global/api/login';
import GlobalStyle from '@global/style';

const queryClient = new QueryClient();

const ThemeContainer = (): JSX.Element => {
  const [currentTheme, setTheme] = useRecoilState<Itheme>(themeState);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUserState] = useRecoilState(userState);

  useEffect(() => {
    const getLoginStatus = async () => {
      const userInfo = await getUserInfo();
      setUserState(userInfo);
      setIsLoading(false);
    };
    getLoginStatus();
  }, []);

  useEffect(() => {
    if (user?.theme) {
      setTheme(getThemeByIndex(user?.theme));
    }
  }, [user]);

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
          <PrivateRoute
            component={BrowseChannel}
            exact
            path="/client/:workspaceId/browse-channels"
          />
          <PrivateRoute
            component={Workspace}
            exact
            path="/client/:workspaceId/:channelId"
          />
          <PrivateRoute component={InvitedCode} path="/invitecode" />
          <PrivateRoute component={GeneratedCode} path="/generatecode" />
          <Route component={NotLogin} path="/notlogin" />
          <Route component={NotLogout} path="/notlogout" />
          <Route component={Changepassword} path="/changepassword" />
          <Route component={GetError} path="/error" />
          <Route component={Loading} path="/loading" />
          <Route component={NotFound} path="*" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const App = (): JSX.Element => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeContainer />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
