import React from 'react';
import { BackgroundContainer, Container, StyledLabel } from './styles';

const MemberElement = (): JSX.Element => {
  return (
    <BackgroundContainer>
      <Container>
        <StyledLabel text="image" />
        <StyledLabel text="username" />
        <StyledLabel text="nickname" />
      </Container>
    </BackgroundContainer>
  );
};

export default MemberElement;
