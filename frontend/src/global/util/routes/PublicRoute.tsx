import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import checkIsLogin from '@global/util/CheckIsLogin';

interface Props {
  Page: () => JSX.Element;
  path: string;
}

const PublicRoute = ({ Page, path }: Props) => {
  if (checkIsLogin()) {
    return <Redirect to="/notlogout" />;
  }
  return (
    <Route path={path}>
      <Page />
    </Route>
  );
};

export default PublicRoute;
