import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import checkIsLogout from '@global/util/CheckIsLogout';

const PrivateRoute = ({ page: Page, path }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    return () => setLoading(false);
  }, []);
  if (checkIsLogout()) {
    return <Redirect to="/notlogin" />;
  }
  return <Route path={path}>{Page}</Route>;
};

export default PrivateRoute;
