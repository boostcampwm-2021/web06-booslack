import React from 'react';
import { useRecoilState } from 'recoil';
import { LoginModalState } from '@state/modal';
import { StyledModal, Container, ModalButton, ModalMessage } from './style';

interface Props {
  Content: string;
}

const CreateLoginModal = ({ Content }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useRecoilState(LoginModalState);
  return (
    <StyledModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Container>
        <ModalMessage>{Content}</ModalMessage>
        <ModalButton
          text="확인"
          type="button"
          onClick={() => setIsOpen(false)}
        />
      </Container>
    </StyledModal>
  );
};

export default CreateLoginModal;
