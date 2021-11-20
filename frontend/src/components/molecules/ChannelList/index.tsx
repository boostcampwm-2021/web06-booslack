import React, { useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Label from '@atoms/Label';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import { joinChannel } from '@global/api/channel';
import { Channel } from '@global/type';
import userState from '@state/user';
import { useChannelListQuery } from '@hook/useChannels';
import { Container, TextSet, SpaceBetweenDiv, MarginedDiv } from './styles';

interface Props {
  channelId: number;
  firstLabelContent?: string;
  secondLabelContent?: string;
  content?: string;
}

const ChannelList = ({
  channelId,
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
        <div>{firstLabelContent || 'channel name'}</div>

        <TextSet>
          <Label color="grey" text={secondLabelContent || 'members'} />
          <Label color="grey" text={content} />
        </TextSet>
      </Container>
      <MarginedDiv>
        {isHover && isJoined && (
          <>
            <LabeledDefaultButton onClick={navigateToChannel} text="view" />
            <LabeledDefaultButton
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                joinChannel(user.id, channelId, workspaceId);
              }}
              backgroundColor="green"
              text="join"
              data-action="join"
            />
          </>
        )}
        {isHover && !isJoined && (
          <LabeledDefaultButton onClick={navigateToChannel} text="나가기" />
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
