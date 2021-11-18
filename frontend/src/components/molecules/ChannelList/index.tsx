import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Label from '@atoms/Label';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import { joinChannel } from '@global/api/channel';
import userState from '@state/user';
import { Container, TextSet, SpaceBetweenDiv, MarginedDiv } from './styles';

interface Props {
  id: string;
  firstLabelContent?: string;
  secondLabelContent?: string;
  content?: string;
}

const ChannelList = ({
  id,
  firstLabelContent,
  secondLabelContent,
  content,
}: Props): JSX.Element => {
  const [isHover, setHover] = useState<boolean>(false);
  const user = useRecoilValue(userState);
  const history = useHistory();
  const MouseHover = (): void => setHover(true);
  const MouseOut = (): void => setHover(false);

  const navigateToChannel = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    history.push(`/client/${user.workspaceId}/${id}`);
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
            onClick={(e) => joinChannel(e, user.id, id, user.workspaceId)}
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
