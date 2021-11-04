import React from 'react';
import WorkspaceTemplate from '@templates/Workspace';
import BrowseContent from '@organisms/BrowseContent';

const BrowseChannel = (): JSX.Element => {
  const Content: JSX.Element = <BrowseContent />;

  return <WorkspaceTemplate Content={Content} />;
};

export default BrowseChannel;
