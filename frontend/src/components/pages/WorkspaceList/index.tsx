import React from 'react';
import WorkspaceListTemplate from '@templates/WorkspaceList';
import { Container } from './styles';

const WorkspaceList = (): JSX.Element => {
  return (
    <Container>
      <WorkspaceListTemplate />
    </Container>
  );
};

export default WorkspaceList;
