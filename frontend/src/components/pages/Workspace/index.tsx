import React from 'react';
import WorkspaceTemplate from '@templates/Workspace';
import WorkspaceContent from '@organisms/WorkspaceContent';
import CreateChannelModal from '@organisms/CreateChannelModal';
import SidebarChannelInfoModal from '@organisms/SidebarChannelInfoModal';
import { useParams } from 'react-router-dom';
import BrowseContent from '@organisms/BrowseContent';

const Workspace = (): JSX.Element => {
  const { channelName } = useParams();
  const workspaceContent =
    channelName === 'browse-channels' ? (
      <BrowseContent />
    ) : (
      <WorkspaceContent />
    );
  return (
    <>
      <WorkspaceTemplate Content={workspaceContent}></WorkspaceTemplate>
      <CreateChannelModal />
      <SidebarChannelInfoModal />
    </>
  );
};

export default Workspace;
