import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import checkIsLogin from '@global/util/CheckIsLogin';
import { useRecoilValue } from 'recoil';
import userState from '@state/user';

interface Props {
  component: () => JSX.Element;
  path: string;
}

const PublicRoute = ({
  component: Component,
  path,
  ...rest
}: Props): JSX.Element => {
  const user = useRecoilValue(userState);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Redirect to="/notlogout" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
