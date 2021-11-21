import React from 'react';
import BrowseContent from '@organisms/BrowseContent';
import WorkspaceTemplate from '@templates/Workspace';

const BrowseChannel = (): JSX.Element => {
  const Content: JSX.Element = <BrowseContent />;

  return <WorkspaceTemplate Content={Content} />;
};

export default BrowseChannel;
