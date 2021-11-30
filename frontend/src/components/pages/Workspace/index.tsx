import React from 'react';
import WorkspaceContent from '@organisms/WorkspaceContent';
import WorkspaceTemplate from '@templates/Workspace';

const Workspace = (): JSX.Element => {
  return (
    <WorkspaceTemplate>
      <WorkspaceContent />
    </WorkspaceTemplate>
  );
};

export default Workspace;
