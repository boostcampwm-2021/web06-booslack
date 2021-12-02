import React from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import AsyncBranch from '@molecules/AsyncBranch';
import ChatHeader from '@molecules/ChatHeader';
import ChatInputBar from '@organisms/ChatInputBar';
import ChatContent from '@organisms/ChatContent';
import ChannelJoinFooter from '@organisms/ChannelJoinFooter';
import userState from '@state/user';
import { mainWorkspaceSizeState } from '@state/workspace';
import { useChannelListQuery, useChannelQuery } from '@hook/useChannels';
import { postMessageAndFiles } from '@global/api/thread';
import { Container } from './style';

const onSendClick = async (
  sendable,
  userHasWorkspaceId,
  channelId,
  message,
  socket,
  setMessageClear,
  setMessage,
  selectedFile,
  setSelectedFile,
  setSelectedFileUrl,
  setShouldScrollDown,
) => {
  if (sendable) {
    await postMessageAndFiles(
      userHasWorkspaceId,
      channelId,
      message,
      socket,
      setMessageClear,
      setMessage,
      selectedFile,
      setSelectedFile,
      setSelectedFileUrl,
      setShouldScrollDown,
    );
    setSelectedFile([]);
    setSelectedFileUrl([]);
  }
};

const Content = () => {
  const user = useRecoilValue(userState);
  const { workspaceId, channelId }: { workspaceId: string; channelId: string } =
    useParams();

  // TODO: remove toString
  const channelListQuery = useChannelListQuery(user.id.toString(), workspaceId);
  const channelQuery = useChannelQuery(channelId);

  const isUserInCurrentChannel = channelListQuery.data.find(
    (channel) => String(channel.id) === channelId,
  );

  const InputBar: JSX.Element = isUserInCurrentChannel ? (
    <ChatInputBar onSendClick={onSendClick} />
  ) : (
    <ChannelJoinFooter channelName={channelQuery.data.name} />
  );

  const { name: nameOfChannel, private: isPrivate } = channelQuery.data;

  const channelName = [isPrivate, nameOfChannel];
  return <ChatContent inputBar={InputBar} channelName={channelName} />;
};

const WorkspaceContent = (): JSX.Element => {
  const WIDTHSIZE = useRecoilValue(mainWorkspaceSizeState);

  return (
    <Container WIDTHVW={WIDTHSIZE}>
      <AsyncBranch size={0}>
        <ChatHeader />
      </AsyncBranch>
      <AsyncBranch size={100}>
        <Content />
      </AsyncBranch>
    </Container>
  );
};

export default WorkspaceContent;
