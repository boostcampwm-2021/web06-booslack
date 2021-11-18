import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Label from '@atoms/Label';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import { joinChannel } from '@global/api/channel';
import userState from '@state/user';
import { Container, TextSet, SpaceBetweenDiv, MarginedDiv } from './styles';

interface Props {
  channelId: string;
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
  const user = useRecoilValue(userState);
  const { workspaceId }: { workspaceId: string } = useParams();
  const history = useHistory();

  const [isHover, setHover] = useState<boolean>(false);
  const MouseHover = (): void => setHover(true);
  const MouseOut = (): void => setHover(false);

  const navigateToChannel = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    history.push(`/client/${workspaceId}/${channelId}`);
  };

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
        {isHover && (
          <LabeledDefaultButton onClick={navigateToChannel} text="view" />
        )}
        {isHover && (
          <LabeledDefaultButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              joinChannel(user.id, channelId, workspaceId);
            }}
            backgroundColor="green"
            text="join"
            data-action="join"
          />
        )}
      </MarginedDiv>
    </SpaceBetweenDiv>
  );
};

export default ChannelList;
