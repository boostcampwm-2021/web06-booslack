import React from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import userState from '@state/user';
import { joinChannel } from '@global/api/channel';
import {
  Container,
  PreviewSubtitle,
  PreviewMetadata,
  StyledLabeledButton,
} from './styles';

interface Props {
  channelName: string;
}

const ChatInputBackGround = ({ channelName }: Props): JSX.Element => {
  const user = useRecoilValue(userState);
  const { workspaceId, channelId }: { workspaceId: string; channelId: string } =
    useParams();

  return (
    <Container>
      <PreviewSubtitle>
        <strong>#{channelName}</strong>을(를) 보고 있습니다.
      </PreviewSubtitle>
      <PreviewMetadata />
      <div>
        <StyledLabeledButton
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            joinChannel(user.id, channelId, workspaceId, user.socket);
          }}
          text="채널 참여"
          className="primary"
        />
        <StyledLabeledButton
          onClick={() => {}}
          text="추가 정보 보기"
          className="secondary"
        />
      </div>
    </Container>
  );
};

export default ChatInputBackGround;
