import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import Label from '@atoms/Label';
import LabeledButton from '@atoms/LabeledButton';
import useInputs from '@hook/useInputs';
import { channelCreateModalState } from '@state/modal';
import userState from '@state/user';
import { createChanel, joinChannel } from '@global/api/channel';
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
  StyledToggleButton,
  ToggleContainer,
  ToggleLabelContainer,
} from './styles';

const initialData = {
  name: '',
  description: '',
};

const CreateChannelModal = (): JSX.Element => {
  const user = useRecoilValue(userState);
  const { workspaceId }: { workspaceId: string } = useParams();

  const [isOpen, setIsOpen] = useRecoilState(channelCreateModalState);
  const [isPrivate, setIsPrivate] = useState(false);
  const [{ name, description }, onChange, clear] = useInputs(initialData);

  const createChannelAndClose = async () => {
    if (!name) return;
    const { channel } = await createChanel(
      name,
      isPrivate,
      description,
      workspaceId,
    );
    joinChannel(user.id, channel.id, workspaceId);
    clear();
    setIsOpen(false);
  };

  return (
    <StyledModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Container>
        <Header>
          {isPrivate ? (
            <HeaderLabel text="Create a private channel" />
          ) : (
            <HeaderLabel text="Create a channel" />
          )}
          <LabeledButton onClick={() => setIsOpen(false)} text="x" />
        </Header>
        <ContentContainer>
          <StyledLightLabel text="Channels are where your team communicates.." />
          <StyledLabeledInput
            label="Name"
            placeholder={`${isPrivate ? '🔒' : '#'} e.g. plan-budget`}
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
            <ToggleLabelContainer>
              <Label text="Make private" />
              {isPrivate ? (
                <StyledLightLabel text="This can't be undone. A private channel cannot be made public later on." />
              ) : (
                <StyledLightLabel text="When a channel is set to private, it can only be viewed or joined by invitation" />
              )}
            </ToggleLabelContainer>
            <StyledToggleButton isOn={isPrivate} setIsOn={setIsPrivate} />
          </ToggleContainer>
        </ContentContainer>
        <Footer>
          <StyledLabeledButton text="Create" onClick={createChannelAndClose} />
        </Footer>
      </Container>
    </StyledModal>
  );
};

export default CreateChannelModal;
