import React, { ReactNode, Suspense, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
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
import { replyToggleState } from '@state/workspace';
import userState from '@state/user';
import { useWorkspaceQuery } from '@hook/useWorkspace';
import defaultProfile from '@global/image/default_account.png';
import { getUserHasWorkspace } from '@global/api/workspace';
import { RowDiv } from './styles';

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

  const { workspaceId }: { workspaceId: string } = useParams();
  const [user, setUser] = useRecoilState(userState);
  const [fileUrl, setFileUrl] = useState(defaultProfile);
  useWorkspaceQuery(workspaceId);

  const queryClient = useQueryClient();

  useEffect(() => {
    const getUserHasWorkspaceStatus = async (socket) => {
      const userHasWorkspace = await getUserHasWorkspace(
        String(user.id),
        workspaceId,
      );
      const { id, nickname, description, theme } = userHasWorkspace;

      const file = await axios.get(`/api/files/userhasworkspace/${id}`);

      if (file?.data.files && file?.data.files.url) {
        setFileUrl(file?.data.files.url);
      }

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

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <WorkspaceHeader fileUrl={fileUrl} />
        <RowDiv>
          <WorkspaceSidebar />
          {children}
          {isOpened && <ReplyBar />}
        </RowDiv>
      </Suspense>
      {channelCreateModal && <CreateChannelModal />}
      {channelInfoModal && <ChannelInfoModal />}
      {channelDescriptionModal && <ChannelDescriptionModal />}
      {channelTopicModal && <ChannelTopicModal />}
      {preferenceModal && <PreferenceModal />}
      {userProfileModal.isOpen && <UserProfileModal />}
    </>
  );
};

export default WorkspaceTemplate;
