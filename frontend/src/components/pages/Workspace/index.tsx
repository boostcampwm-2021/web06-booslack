import React from 'react';
import WorkspaceTemplate from '@templates/Workspace';
import WorkspaceContent from '@organisms/WorkspaceContent';
import CreateChannelModal from '@organisms/CreateChannelModal';

const Workspace = (): JSX.Element => {
  const ChatContent: JSX.Element = <WorkspaceContent />;

  return (
    <>
      <WorkspaceTemplate Content={ChatContent} />
      <CreateChannelModal />
    </>
  );
};

export default Workspace;
