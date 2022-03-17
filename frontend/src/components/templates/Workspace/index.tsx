import React, { ReactNode, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { io } from 'socket.io-client';
import WorkspaceHeader from '@organisms/WorkspaceHeader';
import WorkspaceSidebar from '@organisms/WorkspaceSidebar';
import CreateChannelModal from '@organisms/CreateChannelModal';
import ChannelInfoModal from '@organisms/ChannelInfoModal';
import ChannelDescriptionModal from '@organisms/ChannelDescriptionModal';
import ChannelTopicModal from '@organisms/ChannelTopicModal';
import ReplyBar from '@organisms/ReplyBar';
import PreferenceModal from '@organisms/PreferenceModal';
import UserProfileModal from '@organisms/UserProfileModal';
import { initializeSocket } from '@hook/useSocket';
import {
  channelCreateModalState,
  channelDescriptionModalState,
  channelInfoModalState,
  channelTopicModalState,
  preferenceModalState,
  userProfileModalState,
} from '@state/modal';
import { widthSizeState, replyToggleState } from '@state/workspace';
import userState from '@state/user';
import { useWorkspaceQuery } from '@hook/useWorkspace';
import defaultProfile from '@global/image/default_account.png';
import { getUserHasWorkspace } from '@global/api/workspace';
import { RowDiv, DraggableDiv } from './styles';

interface Props {
  children: ReactNode;
}

const WorkspaceTemplate = ({ children }: Props): JSX.Element => {
  const channelCreateModal = useRecoilValue(channelCreateModalState);
  const channelInfoModal = useRecoilValue(channelInfoModalState);
  const channelDescriptionModal = useRecoilValue(channelDescriptionModalState);
  const channelTopicModal = useRecoilValue(channelTopicModalState);
  const preferenceModal = useRecoilValue(preferenceModalState);
  const userProfileModal = useRecoilValue(userProfileModalState);
  const { isOpened } = useRecoilValue(replyToggleState);

  const setWidthSize = useSetRecoilState(widthSizeState);

  const { workspaceId }: { workspaceId: string } = useParams();
  const [user, setUser] = useRecoilState(userState);
  const [fileUrl, setFileUrl] = useState<any>(defaultProfile);
  useWorkspaceQuery(workspaceId);

  const queryClient = useQueryClient();

  useEffect(() => {
    const getUserHasWorkspaceStatus = async (socket) => {
      const userHasWorkspace = await getUserHasWorkspace(
        String(user.id),
        workspaceId,
      );

      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { id, nickname, description, theme, fileUrl } = userHasWorkspace;

      if (fileUrl) setFileUrl(fileUrl);

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
    getUserHasWorkspaceStatus(socket);

    return () => {
      socket.close();
    };
  }, [workspaceId]);

  initializeSocket(user.socket, queryClient);

  const dragEventHandler = (e) => {
    const { target } = e;
    const { parentNode } = target;

    const parentBox = parentNode.getBoundingClientRect();
    setWidthSize((e.clientX / parentBox.width) * 100 + 1);
  };

  return (
    <>
      <WorkspaceHeader fileUrl={fileUrl} />
      <RowDiv>
        <WorkspaceSidebar />
        {children}
        <DraggableDiv draggable="true" onDragEnd={dragEventHandler} />
        {isOpened && <ReplyBar />}
      </RowDiv>
      {channelCreateModal && <CreateChannelModal />}
      {channelInfoModal.isOpen && <ChannelInfoModal />}
      {channelDescriptionModal && <ChannelDescriptionModal />}
      {channelTopicModal && <ChannelTopicModal />}
      {preferenceModal && <PreferenceModal />}
      {userProfileModal.isOpen && <UserProfileModal />}
    </>
  );
};

export default WorkspaceTemplate;
