import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import LabeledButton from '@atoms/LabeledButton';
import { ChatInputSize } from '@enum/index';
import userState from '@state/user';
import { joinChannel } from '@global/api/channel';
import { Container } from './styles';

interface Props {
  channelName: string;
}

const ChatInputBackGround = ({ channelName }: Props): JSX.Element => {
  const user = useRecoilValue(userState);

  const { width, height } = useMemo(() => {
    return ChatInputSize;
  }, []);

  return (
    <Container width={width} height={height}>
      <div>#{channelName}을(를) 보고 있습니다.</div>
      <div>
        <LabeledButton
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            joinChannel(user.id, user.channelId, user.workspaceId);
          }}
          text="채널 참여"
        />
        <LabeledButton onClick={() => {}} text="추가 정보 보기" />
      </div>
    </Container>
  );
};

export default ChatInputBackGround;
