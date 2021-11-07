import Label from '@atoms/Label';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import ChatHeader from '@molecules/ChatHeader';
import ChatInputBackground from '@organisms/ChatInputBackground';
import ChatContent from '@organisms/ChatContent';
import React, { useEffect, useState } from 'react';
import { Container, MarginedDiv } from './style';
import { useParams } from 'react-router-dom';
import { channelListFromServerState } from 'src/state/Channel';
import { useRecoilValue } from 'recoil';
import ChannelJoinFooter from '@organisms/ChannelJoinFooter';
import axios from 'axios';

const getChannelById = (id: string) => {
  const [channel, setChannel] = useState();
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `http://localhost:8081/api/channel/one/${id}`,
      );
      setChannel(response.data.channel);
    })();
  }, [id]);

  return { channel /* loading, error */ };
};

const WorkspaceContent = (): JSX.Element => {
  const { channelId } = useParams();

  const channelList = useRecoilValue(
    channelListFromServerState(sessionStorage.getItem('id')),
  );
  const isUserInCurrentChannel = channelList.channels.find(
    (channel) => String(channel.id) === channelId,
  );

  const currentChannel = getChannelById(channelId);
  const channelTitleText = currentChannel.channel
    ? currentChannel.channel.name
    : '로딩';
  const channelIdText = currentChannel.channel
    ? currentChannel.channel.id
    : '로딩';

  const ChannelTitle: JSX.Element = <Label text={`# ${channelTitleText}`} />;
  const ExplainContent: JSX.Element | null = (
    <Label color="grey" text="channel explain " />
  );

  const Title: JSX.Element = (
    <MarginedDiv>
      {ChannelTitle}
      {ExplainContent}
    </MarginedDiv>
  );

  const InputBar: JSX.Element = isUserInCurrentChannel ? (
    <ChatInputBackground />
  ) : (
    <ChannelJoinFooter
      channelId={channelIdText}
      channelName={channelTitleText}
    />
  );
  const RightButton = (
    <LabeledButton
      onClick={() => {}}
      width={30}
      height={30}
      color={'black'}
      backgroundColor={'white'}
    />
  );

  return (
    <Container>
      <ChatHeader title={Title} content={null} rightButton={RightButton} />
      <ChatContent inputBar={InputBar} />
    </Container>
  );
};

export default WorkspaceContent;
