import React from 'react';
import WorkspaceHeader from '@organisms/WorkspaceHeader';
import WorkspaceSidebar from '@organisms/WorkspaceSidebar';
import WorkspaceContent from '@organisms/WorkspaceContent';
import { RowDiv } from './style';

const Workspace = (): JSX.Element => {
  return (
    <>
      <WorkspaceHeader />
      <RowDiv>
        <WorkspaceSidebar />
        <WorkspaceContent />
      </RowDiv>
    </>
  );
};

export default Workspace;
