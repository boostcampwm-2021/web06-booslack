import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import userState from '@state/user';

interface Props {
  component: () => JSX.Element;
  path: string;
}

const PrivateRoute = ({
  component: Component,
  path,
  ...rest
}: Props): JSX.Element => {
  const user = useRecoilValue(userState);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
