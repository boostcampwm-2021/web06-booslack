import React, { useEffect, useState } from 'react';
import WorkspaceListTemplate from '@templates/WorkspaceList';
import WorkSpaceListContent from '@organisms/WorkspaceListContent';
import checkIsLogin from '@global/util/CheckIsLogin';
import { Redirect } from 'react-router-dom';
import { Container } from './styles';

const WorkspaceList = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    return () => setLoading(false);
  }, []);
  if (!checkIsLogin()) {
    return <Redirect to="/notlogin" />;
  }

  return (
    <Container>
      <WorkspaceListTemplate>
        <WorkSpaceListContent />
      </WorkspaceListTemplate>
    </Container>
  );
};

export default WorkspaceList;
