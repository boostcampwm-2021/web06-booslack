import React from 'react';
import { useRecoilState } from 'recoil';
import { codeModalState } from '@state/modal';
import { StyledModal, Container, ModalButton, ModalMessage } from './style';

interface Props {
  Content: string;
}

const CodeModal = ({ Content }: Props): JSX.Element => {
  const [{ status, text }, setObject] = useRecoilState(codeModalState);
  return (
    <StyledModal
      isOpen={status}
      onClose={() => setObject({ status: false, text: undefined })}
    >
      <Container>
        <ModalMessage>{text || Content}</ModalMessage>
        <ModalButton
          text="확인"
          type="button"
          onClick={() => setObject({ status: false, text: undefined })}
        />
      </Container>
    </StyledModal>
  );
};

export default CodeModal;
