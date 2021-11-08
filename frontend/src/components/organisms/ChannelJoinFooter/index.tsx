import { ChatInputSize } from '@enum/index';
import React, { useMemo } from 'react';
import { Container } from './styles';
import LabeledButton from '@atoms/LabeledButton';
import axios from 'axios';

interface Props {
  channelName: string;
  channelId: number;
}

const addUserToChannel = async (id: string) => {
  await axios.post('http://localhost:8081/api/channel/userToChannel', {
    userId: sessionStorage.getItem('id'),
    channelId: id,
    workspaceId: sessionStorage.getItem('workspaceId'),
  });
  window.location.href = window.location.href;
};

const ChatInputBackGround = ({
  channelId,
  channelName,
}: Props): JSX.Element => {
  const { width, height } = useMemo(() => {
    return ChatInputSize;
  }, []);

  return (
    <Container width={width} height={height}>
      <div>#{channelName}을(를) 보고 있습니다.</div>
      <div>
        <LabeledButton
          onClick={() => {
            addUserToChannel(String(channelId));
          }}
          text="채널 참여"
        />
        <LabeledButton onClick={() => {}} text="추가 정보 보기" />
      </div>
    </Container>
  );
};

export default ChatInputBackGround;
