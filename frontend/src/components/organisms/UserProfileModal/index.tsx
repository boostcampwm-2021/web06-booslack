import React from 'react';
import { useRecoilState } from 'recoil';
import { userProfileModalState } from '@state/modal';
import Label from '@atoms/Label';
import mintImage from '@global/image/mintChoco.png';
import {
  StyledPopup,
  Container,
  StyledImageBox,
  StyledBlueLabel,
  ButtonContainer,
  StyledLabeledButton,
  HeaderContainer,
  StyledBoldLabel,
} from './styles';

const UserProfileModal = (): JSX.Element => {
  const [{ isOpen, userHasWorkspace, x, y }, setIsOpen] = useRecoilState(
    userProfileModalState,
  );

  return (
    <StyledPopup
      x={x ? x + 20 : null}
      y={y}
      isOpen={isOpen}
      onClose={() =>
        setIsOpen({ isOpen: false, userHasWorkspace: null, x: null, y: null })
      }
    >
      {/* TODO: user profile picture */}
      <StyledImageBox image={mintImage} />
      <Container>
        <HeaderContainer>
          <StyledBoldLabel text={userHasWorkspace.nickname} />
          {userHasWorkspace.description && (
            <Label text={userHasWorkspace.description} />
          )}
        </HeaderContainer>
        <StyledBlueLabel text="View full profile" />
        <ButtonContainer>
          <StyledLabeledButton text="Message" onClick={() => {}} />
          <StyledLabeledButton text="Huddle" onClick={() => {}} />
        </ButtonContainer>
      </Container>
    </StyledPopup>
  );
};

export default UserProfileModal;
