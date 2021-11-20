import React from 'react';

import WorkspaceContent from '@organisms/WorkspaceContent';
import WorkspaceTemplate from '@templates/Workspace';

const Workspace = (): JSX.Element => {
  const workspaceContent = <WorkspaceContent />;

  return (
    <>
      <WorkspaceTemplate Content={workspaceContent} />
    </>
  );
};

export default Workspace;
