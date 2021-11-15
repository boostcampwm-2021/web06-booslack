import React from 'react';
import { Route } from 'react-router-dom';

interface Props {
  Page: () => JSX.Element;
  path: string;
}

const TotalRoute = ({ Page, path }: Props) => {
  return (
    <Route path={path}>
      <Page />
    </Route>
  );
};

export default TotalRoute;
