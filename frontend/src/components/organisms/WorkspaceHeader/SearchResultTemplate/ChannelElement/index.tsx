import { Channel } from '@global/type';
import React from 'react';
import { BackgroundContainer, Container, StyledLabel } from './styles';

interface Props {
  channel: Channel;
  selected?: boolean;
}

const ChannelElement = ({ channel, selected }: Props): JSX.Element => {
  return (
    <BackgroundContainer>
      <Container selected={selected}>
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
