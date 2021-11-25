import React from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import ChatHeader from '@molecules/ChatHeader';
import ChatInputBar from '@organisms/ChatInputBar';
import ChatContent from '@organisms/ChatContent';
import ChannelJoinFooter from '@organisms/ChannelJoinFooter';
import userState from '@state/user';
import { mainWorkspaceSizeState } from '@state/workspace';
import { useChannelListQuery, useChannelQuery } from '@hook/useChannels';
import { Container } from './style';

const WorkspaceContent = (): JSX.Element => {
  const user = useRecoilValue(userState);
  const WIDTHSIZE = useRecoilValue(mainWorkspaceSizeState);
  const { workspaceId, channelId }: { workspaceId: string; channelId: string } =
    useParams();

  const channelListQuery = useChannelListQuery(user.id, workspaceId);
  const channelQuery = useChannelQuery(channelId);

  if (channelListQuery.isLoading || channelQuery.isLoading) {
    return <div>Loading</div>;
  }
  if (channelListQuery.isError || channelQuery.isError) return <div>Error</div>;

  const isUserInCurrentChannel = channelListQuery.data.find(
    (channel) => String(channel.id) === channelId,
  );

  const InputBar: JSX.Element = isUserInCurrentChannel ? (
    <ChatInputBar />
  ) : (
    <ChannelJoinFooter channelName={channelQuery.data.name} />
  );

  const { name: nameOfChannel, private: isPrivate } = channelQuery.data;

  const channelName = [isPrivate, nameOfChannel];

  return (
    <Container WIDTHVW={WIDTHSIZE}>
      <ChatHeader />
      <ChatContent inputBar={InputBar} channelName={channelName} />
    </Container>
  );
};

export default WorkspaceContent;
