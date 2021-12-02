import React, { useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Label from '@atoms/Label';
import { joinChannel, leaveChannel } from '@global/api/channel';
import { Channel } from '@global/type';
import userState from '@state/user';
import { useChannelListQuery } from '@hook/useChannels';
import {
  Container,
  StyledLabel,
  StyledJoinedNoticeLabel,
  TextSet,
  SpaceBetweenDiv,
  MarginedDiv,
  StyledButton,
} from './styles';

interface Props {
  channelId: number;
  channelType: string;
  firstLabelContent?: string;
  secondLabelContent?: string;
  content?: string;
}

const ChannelList = ({
  channelId,
  channelType,
  firstLabelContent,
  secondLabelContent,
  content,
}: Props): JSX.Element => {
  const history = useHistory();
  const user = useRecoilValue(userState);
  const { workspaceId }: { workspaceId: string } = useParams();
  const { data } = useChannelListQuery(user.id, workspaceId);

  const [isHover, setHover] = useState<boolean>(false);
  const MouseHover = (): void => setHover(true);
  const MouseOut = (): void => setHover(false);

  const navigateToChannel = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    history.push(`/client/${workspaceId}/${channelId}`);
  };

  const isJoined = useMemo(() => {
    if (data) {
      return !data?.some(
        (channelLists: Channel) => channelLists.id === channelId,
      );
    }

    return false;
  }, [data]);

  return (
    <SpaceBetweenDiv
      onMouseEnter={MouseHover}
      onMouseLeave={MouseOut}
      onClick={navigateToChannel}
    >
      <Container>
        <div>
          {channelType}
          <StyledLabel text={` ${firstLabelContent}` || ' channel name'} />
        </div>

        <TextSet>
          {!isJoined && <StyledJoinedNoticeLabel text="✔ 참여함" />}
          <Label color="grey" text={secondLabelContent || ''} />
          <Label color="grey" text={content} />
        </TextSet>
      </Container>
      <MarginedDiv>
        {isHover && isJoined && (
          <>
            <StyledButton onClick={navigateToChannel} text="보기" />
            <StyledButton
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                joinChannel(user.id, channelId, workspaceId, user.socket);
              }}
              backgroundColor="green"
              text="참여"
              data-action="join"
              isJoin
            />
          </>
        )}
        {isHover && !isJoined && (
          <StyledButton
            onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              try {
                await leaveChannel(channelId, workspaceId, user.socket);
              } catch (error) {
                history.push('/error');
              }
            }}
            text="나가기"
          />
        )}
      </MarginedDiv>
    </SpaceBetweenDiv>
  );
};

ChannelList.defaultProps = {
  firstLabelContent: '',
  secondLabelContent: '',
  content: '',
};

export default ChannelList;
