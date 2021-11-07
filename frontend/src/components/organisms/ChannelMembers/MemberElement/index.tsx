import React from 'react';
import { BackgroundContainer, Container, StyledLabel } from './styles';

const MemberElement = ({ nickname, email }): JSX.Element => {
  return (
    <BackgroundContainer>
      <Container>
        <StyledLabel text="image" />
        <StyledLabel text={nickname} />
        <StyledLabel text={email} />
      </Container>
    </BackgroundContainer>
  );
};

export default MemberElement;
