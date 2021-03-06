import React from 'react';
import { useSetRecoilState } from 'recoil';
import { useHistory, useParams } from 'react-router-dom';
import { Channel } from '@global/type';
import { searchModalState } from '@state/modal';
import { shouldScrollDownState } from '@state/thread';
import { BackgroundContainer, Container, StyledLabel } from './styles';

interface Props {
  channel: Channel;
  selected?: boolean;
}

const ChannelElement = ({ channel, selected }: Props): JSX.Element => {
  const { workspaceId }: { workspaceId: string } = useParams();
  const history = useHistory();
  const setSearchModalState = useSetRecoilState(searchModalState);
  const setShouldScrollDownState = useSetRecoilState(shouldScrollDownState);

  return (
    <BackgroundContainer>
      <Container
        selected={selected}
        onClick={() => {
          setSearchModalState(false);
          setShouldScrollDownState(true);
          history.push(`/client/${workspaceId}/${channel.id}`);
        }}
      >
        <StyledLabel text={channel.private ? '🔒' : '#'} />
        <StyledLabel text={channel.name} />
      </Container>
    </BackgroundContainer>
  );
};

ChannelElement.defaultProps = {
  selected: false,
};

export default ChannelElement;
