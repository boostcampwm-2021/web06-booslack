import React from 'react';
import WorkspaceListTemplate from '@templates/WorkspaceList';
import WorkSpaceListContent from '@organisms/WorkspaceListContent';
import { Container } from './styles';

const WorkspaceList = (): JSX.Element => {
  return (
    <Container>
      <WorkspaceListTemplate>
        <WorkSpaceListContent />
      </WorkspaceListTemplate>
    </Container>
  );
};

export default WorkspaceList;