import React from 'react';
import { useParams } from 'react-router-dom';
import BrowseContent from '@organisms/BrowseContent';
import WorkspaceContent from '@organisms/WorkspaceContent';
import WorkspaceTemplate from '@templates/Workspace';

const Workspace = (): JSX.Element => {
  const { channelId }: { channelId?: string } = useParams();

  // eslint-disable-next-line operator-linebreak
  const workspaceContent =
    channelId === 'browse-channels' ? <BrowseContent /> : <WorkspaceContent />;
  return (
    <>
      <WorkspaceTemplate Content={workspaceContent} />
    </>
  );
};

export default Workspace;
