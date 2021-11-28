import { UserHasWorkspace } from '@global/type';
import React from 'react';
import { BackgroundContainer, Container, StyledLabel } from './styles';

interface Props {
  userHasWorkspace: UserHasWorkspace;
  selected?: boolean;
}

const MemberElement = ({ userHasWorkspace, selected }: Props): JSX.Element => {
  return (
    <BackgroundContainer>
      <Container selected={selected}>
        <StyledLabel text={`file ${userHasWorkspace.fileId}`} />
        <StyledLabel text={userHasWorkspace.nickname} />
        {userHasWorkspace.description && (
          <StyledLabel text={userHasWorkspace.description} />
        )}
      </Container>
    </BackgroundContainer>
  );
};

MemberElement.defaultProps = {
  selected: false,
};

export default MemberElement;
