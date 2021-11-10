import React from 'react';
import { useRecoilState } from 'recoil';
import { LoginModalState } from '@state/modal';
import { StyledModal, Container, ModalButton } from './style';

interface Props {
  Content: string;
}

const CreateLoginModal = ({ Content }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useRecoilState(LoginModalState);
  return (
    <StyledModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Container>
        <span>{Content}</span>
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
