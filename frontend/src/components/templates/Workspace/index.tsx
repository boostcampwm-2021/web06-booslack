import React, { Suspense, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQueryClient } from 'react-query';
import { io } from 'socket.io-client';
import WorkspaceHeader from '@organisms/WorkspaceHeader';
import WorkspaceSidebar from '@organisms/WorkspaceSidebar';
import CreateChannelModal from '@organisms/CreateChannelModal';
import ChannelInfoModal from '@organisms/ChannelInfoModal';
import ChannelDescriptionModal from '@organisms/ChannelDescriptionModal';
import SidebarChannelInfoModal from '@organisms/SidebarChannelInfoModal';
import ChannelTopicModal from '@organisms/ChannelTopicModal';
import { initializeSocket } from '@hook/useSocket';
import {
  channelCreateModalState,
  channelDescriptionModalState,
  channelInfoModalState,
  channelTopicModalState,
  sidebarChannelInfoModalState,
} from '@state/modal';
import userState from '@state/user';
import { RowDiv } from './styles';

interface Props {
  Content: JSX.Element;
}

const WorkspaceTemplate = ({ Content }: Props): JSX.Element => {
  const channelCreateModal = useRecoilValue(channelCreateModalState);
  const channelInfoModal = useRecoilValue(channelInfoModalState);
  const channelDescriptionModal = useRecoilValue(channelDescriptionModalState);
  const channelTopicModal = useRecoilValue(channelTopicModalState);
  const sidebarChannelModal = useRecoilValue(sidebarChannelInfoModalState);

  const { workspaceId }: { workspaceId: string } = useParams();
  const [user, setUser] = useRecoilState(userState);

  const queryClient = useQueryClient();

  useEffect(() => {
    const getUserHasWorkspace = async (socket) => {
      const res = await axios.get(
        `/api/userHasWorkspaces?userId=${user.id}&workspaceId=${workspaceId}`,
      );
      const { id, nickname, description, theme } = res.data.userHasWorkspace;
      setUser((prevState) => ({
        ...prevState,
        userHasWorkspaceId: id,
        nickname,
        description,
        theme,
        socket,
      }));
    };

    const socket = io(`/workspace:${workspaceId}`);
    getUserHasWorkspace(socket);
    return () => {
      socket.close();
    };
  }, [workspaceId]);

  initializeSocket(user.socket, queryClient);

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <WorkspaceHeader />
        <RowDiv>
          <WorkspaceSidebar />
          {Content}
        </RowDiv>
      </Suspense>
      {channelCreateModal && <CreateChannelModal />}
      {channelInfoModal && <ChannelInfoModal />}
      {sidebarChannelModal && <SidebarChannelInfoModal />}
      {channelDescriptionModal && <ChannelDescriptionModal />}
      {channelTopicModal && <ChannelTopicModal />}
    </>
  );
};

export default WorkspaceTemplate;
