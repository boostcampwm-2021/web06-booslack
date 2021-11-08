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
<<<<<<< HEAD
      <WorkspaceTemplate Content={workspaceContent} />
=======
      <WorkspaceTemplate Content={workspaceContent}></WorkspaceTemplate>
      <CreateChannelModal />
      <SidebarChannelInfoModal />
>>>>>>> 036d3fb (fix: pr #73 #74 합친후 에러 수정)
    </>
  );
};

export default Workspace;
