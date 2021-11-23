import React from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import LabeledButton from '@atoms/LabeledButton';
import userState from '@state/user';
import { joinChannel } from '@global/api/channel';
import { Container } from './styles';

interface Props {
  channelName: string;
}

const ChatInputBackGround = ({ channelName }: Props): JSX.Element => {
  const user = useRecoilValue(userState);
  const { workspaceId, channelId }: { workspaceId: string; channelId: string } =
    useParams();

  return (
    <Container>
      <div>#{channelName}을(를) 보고 있습니다.</div>
      <div>
        <LabeledButton
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            joinChannel(user.id, channelId, workspaceId, user.socket);
          }}
          text="채널 참여"
        />
        <LabeledButton onClick={() => {}} text="추가 정보 보기" />
      </div>
    </Container>
  );
};

export default ChatInputBackGround;
