import React, { Suspense } from 'react';
import WorkspaceTemplate from '@templates/Workspace';
import WorkspaceContent from '@organisms/WorkspaceContent';
import CreateChannelModal from '@organisms/CreateChannelModal';
import SidebarChannelInfoModal from '@organisms/SidebarChannelInfoModal';
import { useParams } from 'react-router-dom';
import BrowseContent from '@organisms/BrowseContent';

const Workspace = (): JSX.Element => {
  const { channelId } = useParams();
  const workspaceContent =
    channelId === 'browse-channels' ? <BrowseContent /> : <WorkspaceContent />;
  return (
    <>
      <Suspense fallback={() => <p>Loading...</p>}>
        <WorkspaceTemplate Content={workspaceContent}></WorkspaceTemplate>
      </Suspense>
      <CreateChannelModal />
      <SidebarChannelInfoModal />
    </>
  );
};

export default Workspace;
