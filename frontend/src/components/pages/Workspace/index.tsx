import React from 'react';
import WorkspaceTemplate from '@templates/Workspace';
import WorkspaceContent from '@organisms/WorkspaceContent';

const Workspace = (): JSX.Element => {
  const ChatContent: JSX.Element = <WorkspaceContent />;

  return (
    <>
      <WorkspaceTemplate Content={ChatContent}></WorkspaceTemplate>
    </>
  );
};

export default Workspace;
