import axios from 'axios';
import React from 'react';
import { useRecoilState } from 'recoil';
import useInputs from 'src/hooks/useInputs';
import { channelDescriptionModalState } from 'src/state/modal';
import {
  ButtonContainer,
  CancelButton,
  Container,
  SaveButton,
  StyledInput,
  StyledLabel,
  StyledModal,
} from './styles';

const initialData = {
  description: '',
};

const ChannelDescriptionModal = (): JSX.Element => {
  const [isOpen, setIsOpen] = useRecoilState(channelDescriptionModalState);
  const [{ description }, onChange, clear] = useInputs(initialData);

  const updateChannelDescription = async () => {
    await axios({
      method: 'PUT',
      url: 'api/channels/2', // change to channel id
      data: {
        description,
      },
    });
    clear();
    setIsOpen(false);
  };

  return (
    <StyledModal isOpen={isOpen} onClose={() => setIsOpen(false)} zIndex={200}>
      <Container>
        <StyledLabel text="Edit description" />
        <StyledInput
          placeholder="Describe your team"
          onChange={onChange}
          name="description"
          value={description}
        />
        <ButtonContainer>
          <CancelButton text="Cancel" onClick={() => setIsOpen(false)} />
          <SaveButton text="Save" onClick={updateChannelDescription} />
        </ButtonContainer>
      </Container>
    </StyledModal>
  );
};

export default ChannelDescriptionModal;
