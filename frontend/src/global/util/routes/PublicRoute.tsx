import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import checkIsLogin from '@global/util/CheckIsLogin';

const PublicRoute = ({ page: Page, path }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    return () => setLoading(false);
  }, []);
  if (checkIsLogin()) {
    return <Redirect to="/notlogout" />;
  }
  return <Route path={path}>{Page}</Route>;
};

export default PublicRoute;
