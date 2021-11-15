import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

const TotalRoute = ({ page: Page, path }) => {
  return <Route path={path}>{Page}</Route>;
};

export default TotalRoute;
