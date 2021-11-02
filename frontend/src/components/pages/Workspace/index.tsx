import React from 'react';
import WorkspaceHeader from '@organisms/WorkspaceHeader';
import WorkspaceSidebar from '@organisms/WorkspaceSidebar';
import WorkspaceContent from '@organisms/WorkspaceContent';
import { RowDiv } from './style';
import CreateChannelModal from '@organisms/CreateChannelModal';

const Workspace = (): JSX.Element => {
  return (
    <>
      <WorkspaceHeader />
      <RowDiv>
        <WorkspaceSidebar />
        <WorkspaceContent />
      </RowDiv>
      <CreateChannelModal />
    </>
  );
};

export default Workspace;
