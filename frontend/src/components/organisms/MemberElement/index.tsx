import React from 'react';
import { useSetRecoilState } from 'recoil';
import { UserHasWorkspace } from '@global/type';
import { userProfileModalState } from '@state/modal';
import { BackgroundContainer, Container, StyledLabel } from './styles';

interface Props {
  userHasWorkspace: UserHasWorkspace;
  selected?: boolean;
}

const MemberElement = ({ userHasWorkspace, selected }: Props): JSX.Element => {
  const setIsUserProfileModalOpen = useSetRecoilState(userProfileModalState);

  return (
    <BackgroundContainer>
      <Container
        selected={selected}
        onClick={(e) =>
          setIsUserProfileModalOpen({
            isOpen: true,
            userHasWorkspace,
            x: e.clientX,
            y: e.clientY,
          })
        }
      >
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
