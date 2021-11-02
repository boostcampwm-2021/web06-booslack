import Input from '@atoms/Input';
import Modal from '@atoms/Modal';
import LabeledInput from '@molecules/LabeledInput';
import CreateChannelModal from '@organisms/CreateChannelModal';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { channelCreateModalState } from 'src/state/modal';
import { Container } from './style';

const WorkspaceContent = (): JSX.Element => {
  const [isOpen, setIsOpen] = useRecoilState(channelCreateModalState);

  // return <Container />;
  // return <CreateChannelModal />;
  return (
    <Container>
      <button onClick={() => setIsOpen(true)}>open modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <CreateChannelModal />
      </Modal>
    </Container>
  );
};

export default WorkspaceContent;
//6 28
