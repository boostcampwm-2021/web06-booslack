import React from 'react';
import BrowseContent from '@organisms/BrowseContent';
import WorkspaceTemplate from '@templates/Workspace';

const BrowseChannel = (): JSX.Element => {
  return (
    <WorkspaceTemplate>
      <BrowseContent />
    </WorkspaceTemplate>
  );
};

export default BrowseChannel;
