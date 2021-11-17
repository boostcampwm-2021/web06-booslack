import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import LabeledButton from '@atoms/LabeledButton';
import { ChatInputSize } from '@enum/index';
import userState from '@state/user';
import { Container } from './styles';

interface Props {
  channelName: string;
}

const addUserToChannel = async (
  userId: number,
  channelId: number,
  workspaceId: number,
) => {
  await axios.post('/api/channels/userToChannel', {
    userId,
    channelId,
    workspaceId,
  });
  window.location.href = window.location.href;
};

const ChatInputBackGround = ({ channelName }: Props): JSX.Element => {
  const { width, height } = useMemo(() => {
    return ChatInputSize;
  }, []);

  const user = useRecoilValue(userState);

  return (
    <Container width={width} height={height}>
      <div>#{channelName}을(를) 보고 있습니다.</div>
      <div>
        <LabeledButton
          onClick={() => {
            addUserToChannel(user.id, user.channelId, user.workspaceId);
          }}
          text="채널 참여"
        />
        <LabeledButton onClick={() => {}} text="추가 정보 보기" />
      </div>
    </Container>
  );
};

export default ChatInputBackGround;
