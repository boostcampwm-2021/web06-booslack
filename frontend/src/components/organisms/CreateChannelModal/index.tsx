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
import axios from 'axios';
import useInputs from 'src/hooks/useInputs';

const initialData = {
  name: '',
  description: '',
  isPrivate: false,
};

const CreateChannelModal = (): JSX.Element => {
  const [isOpen, setIsOpen] = useRecoilState(channelCreateModalState);
  const [{ name, description, isPrivate }, onChange, clear] =
    useInputs(initialData);

  const createChannel = async () => {
    if (!name) return;
    await axios({
      method: 'POST',
      url: 'api/users/add',
      data: {
        nickname: name,
        email: `${name}@naver.com`,
        type: isPrivate ? 'private' : 'public',
      },
    });
    clear();
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Container>
        <Label text="Create a channel" />
        <Label text="channels are where your team communicates.." />
        <LabeledInput
          label="Name"
          placeholder="# e.g. plan-budget"
          onChange={onChange}
          name="name"
          value={name}
        />
        <LabeledInput
          label="Description (optional)"
          onChange={onChange}
          name="description"
          value={description}
        />
        <Label text="Make private" />
        <div>
          <Label text="When a channel is set to private" />
          <IconButton icon={MdToggleOff} onClick={() => {}} />
        </div>
        <div>
          <Label text="Share outside of channel" />
          <LabeledButton text="Create" onClick={createChannel} />
        </div>
      </Container>
    </Modal>
  );
};

export default CreateChannelModal;
