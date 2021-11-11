import React from 'react';
import { BackgroundContainer, Container, StyledLabel } from './styles';

interface Props {
  nickname: string;
  email: string;
  selected?: boolean;
}

const MemberElement = ({ nickname, email, selected }: Props): JSX.Element => {
  return (
    <BackgroundContainer>
      <Container selected={selected}>
        <StyledLabel text="image" />
        <StyledLabel text={nickname} />
        <StyledLabel text={email} />
      </Container>
    </BackgroundContainer>
  );
};

MemberElement.defaultProps = {
  selected: false,
};

export default MemberElement;
