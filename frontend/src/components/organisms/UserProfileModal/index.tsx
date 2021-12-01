import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userProfileModalState } from '@state/modal';
import Label from '@atoms/Label';
import defaultAccount from '@global/image/default_account.png';
import axios from 'axios';
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
  const [fileUrl, setFileUrl] = useState(defaultAccount);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useEffect(async () => {
    if (userHasWorkspace.fileId && userHasWorkspace.fileId !== 1) {
      const response = await axios.get(`/api/files/${userHasWorkspace.fileId}`);
      if (response?.data && response?.data.files && response?.data.files.url) {
        setFileUrl(response?.data.files.url);
      }
    }
  }, []);

  return (
    <StyledPopup
      x={x ? x + 20 : null}
      y={y}
      isOpen={isOpen}
      onClose={() =>
        setIsOpen({ isOpen: false, userHasWorkspace: null, x: null, y: null })
      }
    >
      <StyledImageBox image={fileUrl} />
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
