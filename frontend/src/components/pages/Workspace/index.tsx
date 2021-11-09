import React from 'react';
import WorkspaceTemplate from '@templates/Workspace';
import WorkspaceContent from '@organisms/WorkspaceContent';
import { useParams } from 'react-router-dom';
import BrowseContent from '@organisms/BrowseContent';

const Workspace = (): JSX.Element => {
  const { channelId } = useParams();
  const workspaceContent =
    channelId === 'browse-channels' ? <BrowseContent /> : <WorkspaceContent />;
  return (
    <>
      <WorkspaceTemplate Content={workspaceContent} />
    </>
  );
};

export default Workspace;
