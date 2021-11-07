import React from 'react';
import MemberElement from './MemberElement';
import { Container, ScrollContainer, StyledInput } from './styles';

const ChannelMembers = (): JSX.Element => {
  return (
    <Container>
      <StyledInput placeholder="Find members" />
      <ScrollContainer>
        <MemberElement />
        <MemberElement />
        <MemberElement />
        <MemberElement />
      </ScrollContainer>
    </Container>
  );
};

export default ChannelMembers;
