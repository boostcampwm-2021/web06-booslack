import IconButton from '@atoms/IconButton';
import Label from '@atoms/Label';
import LabeledInput from '@molecules/LabeledInput';
import React from 'react';
import {
  Container,
  ContentContainer,
  Footer,
  Header,
  HeaderLabel,
  StyledLabeledButton,
  StyledLabeledInput,
  StyledLightLabel,
  StyledModal,
  ToggleContainer,
  ToggleContainerLabel,
} from './styles';
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
    <StyledModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Container>
        <Header>
          <HeaderLabel text="Create a channel" />
          <LabeledButton text="x" />
        </Header>
        <ContentContainer>
          <StyledLightLabel text="Channels are where your team communicates.." />
          <StyledLabeledInput
            label="Name"
            placeholder="# e.g. plan-budget"
            onChange={onChange}
            name="name"
            value={name}
          />
          <StyledLabeledInput
            label="Description (optional)"
            onChange={onChange}
            name="description"
            value={description}
          />
          <ToggleContainer>
            <ToggleContainerLabel>
              <Label text="Make private" />
              <StyledLightLabel text="When a channel is set to private" />
            </ToggleContainerLabel>
            <IconButton icon={MdToggleOff} onClick={() => {}} />
          </ToggleContainer>
        </ContentContainer>
        <Footer>
          <StyledLabeledButton text="Create" onClick={createChannel} />
        </Footer>
      </Container>
    </StyledModal>
  );
};

export default CreateChannelModal;
