import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAsync from '@hook/useAsync';

interface Props {
  Page: () => JSX.Element;
  path: string;
}

const PrivateRoute = ({ Page, path }: Props) => {
  const { data } = useAsync(null, 'api/login/info', [], 'POST');
  if (!(data === null) && data.message === 'User is not Login') {
    return <Redirect to="/notlogin" />;
  }
  return (
    <Route path={path}>
      <Page />
    </Route>
  );
};

export default PrivateRoute;
