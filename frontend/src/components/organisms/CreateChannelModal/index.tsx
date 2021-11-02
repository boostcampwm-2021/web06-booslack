import IconButton from '@atoms/IconButton';
import Label from '@atoms/Label';
import LabeledInput from '@molecules/LabeledInput';
import React from 'react';
import { Container } from './styles';
import { MdToggleOff } from 'react-icons/md';
import LabeledButton from '@atoms/LabeledButton';
import Modal from '@atoms/Modal';
import { useRecoilState } from 'recoil';
import { channelCreateModalState } from 'src/state/modal';

const CreateChannelModal = (): JSX.Element => {
  const [isOpen, setIsOpen] = useRecoilState(channelCreateModalState);

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Container>
        <Label text="Create a channel" />
        <Label text="channels are where your team communicates.." />
        <LabeledInput label="Name" placeholder="# e.g. plan-budget" />
        <LabeledInput label="Description (optional)" />
        <Label text="Make private" />
        <div>
          <Label text="When a channel is set to private" />
          <IconButton icon={MdToggleOff} onClick={() => {}} />
        </div>
        <div>
          <Label text="Share outside of channel" />
          <LabeledButton text="Create" onClick={() => {}} />
        </div>
      </Container>
    </Modal>
  );
};

export default CreateChannelModal;
